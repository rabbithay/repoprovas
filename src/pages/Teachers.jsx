/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Box, Grommet, Accordion, AccordionPanel, Text, List,
} from 'grommet';
import { theme } from '../styles/theme';
import { AppBar } from '../components/AppBar';
import { getTeachersExams } from '../service/connectApi';
import handleError from '../utils/handleError';

export default function Teachers() {
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    getTeachersExams().then((res) => {
      setTeacherList(res.data);
    }).catch((error) => {
      handleError(error);
    });
  });

  return (
    <Grommet theme={theme} full>
      <AppBar />
      <Box fill align="center" justify="center">
        <Box width="large">
          <Accordion>
            { teacherList.map((teacherInfo) => {
              if (teacherInfo.exams.length > 0) {
                return (
                  <AccordionPanel label={`${teacherInfo.name} - ${teacherInfo.exams.length} documentos`}>
                    <Box background="light-2" overflow="auto" style={{ height: 'auto', minHeight: '100px', maxHeight: '100%' }} pad="large">
                      <Box fill height="auto" flex={false}>
                        <Box
                          fill
                          align="left"
                          pad={{
                            bottom: 'medium',
                            horizontal: 'large',
                            top: 'medium',
                          }}
                        >
                          {teacherInfo.exams.filter((exam) => exam.category === 'P1').length ? (
                            <>
                              <Text fill alignSelf="center" size="large">P1</Text>
                              <List
                                pad={{ left: 'small', right: 'none' }}
                                data={teacherInfo.exams.filter((exam) => exam.category === 'P1').sort((a, b) => a.title - b.title)}
                                primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.subject.title}`}</a>)}
                              />
                            </>
                          ) : ''}

                          {teacherInfo.exams.filter((exam) => exam.category === 'P2').length ? (
                            <>
                              <Text fill alignSelf="center" size="large">P2</Text>
                              <List
                                pad={{ left: 'small', right: 'none' }}
                                data={teacherInfo.exams.filter((exam) => exam.category === 'P2').sort((a, b) => a.title - b.title)}
                                primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.subject.title}`}</a>)}
                              />
                            </>
                          ) : ''}

                          {teacherInfo.exams.filter((exam) => exam.category === 'P3').length

                            ? (
                              <>
                                <Text fill alignSelf="center" size="large">P3</Text>
                                <List
                                  pad={{ left: 'small', right: 'none' }}
                                  data={teacherInfo.exams.filter((exam) => exam.category === 'P3').sort((a, b) => a.title - b.title)}
                                  primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.subject.title}`}</a>)}
                                />
                              </>
                            ) : ''}

                          { teacherInfo.exams.filter((exam) => exam.category === '2ch').length ? (
                            <>
                              <Text fill alignSelf="center" size="large">2ch</Text>
                              <List
                                pad={{ left: 'small', right: 'none' }}
                                data={teacherInfo.exams.filter((exam) => exam.category === '2ch').sort((a, b) => a.title - b.title)}
                                primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.subject.title}`}</a>)}
                              />
                            </>
                          ) : ''}

                          { teacherInfo.exams.filter((exam) => exam.category === 'Outras').length > 0
                            ? (
                              <>
                                <Text fill alignSelf="center" size="large">Outras</Text>
                                <List
                                  pad={{ left: 'small', right: 'none' }}
                                  data={teacherInfo.exams.filter((exam) => exam.category === 'Outras').sort((a, b) => a.title - b.title)}
                                  primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.subject.title}`}</a>)}
                                />
                              </>
                            )
                            : ''}
                        </Box>
                      </Box>
                    </Box>
                  </AccordionPanel>
                );
              }
              return '';
            })}
          </Accordion>
        </Box>
      </Box>
    </Grommet>
  );
}
