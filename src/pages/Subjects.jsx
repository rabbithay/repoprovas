/* eslint-disable no-unreachable-loop */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Box, Grommet, Accordion, AccordionPanel, Text, List,
} from 'grommet';
import { theme } from '../styles/theme';
import { AppBar } from '../components/AppBar';
import { getSubjectsExams } from '../service/connectApi';
import handleError from '../utils/handleError';

export default function Subjects() {
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    getSubjectsExams().then((res) => {
      setSubjectList(res.data);
    }).catch((error) => {
      handleError(error);
    });
  });
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <Grommet theme={theme}>
      <AppBar />
      <Box fill align="center" justify="center">
        <Box width="large">
          {array.map((i) => (
            <>
              <Text fill margin="large" alignSelf="center" size="large">{`${i}° semestre`}</Text>
              <Accordion>
                {
                      subjectList.filter((subjectInfo) => subjectInfo.semester === i).map((subjectInfo) => (
                        <AccordionPanel label={`${subjectInfo.title}`}>
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
                                {subjectInfo.exams.filter((exam) => exam.category === 'P1').length ? (
                                  <>
                                    <Text fill alignSelf="center" size="large">P1</Text>
                                    <List
                                      pad={{ left: 'small', right: 'none' }}
                                      data={subjectInfo.exams.filter((exam) => exam.category === 'P1').sort((a, b) => a.title - b.title)}
                                      primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.teacher.name}`}</a>)}
                                    />
                                  </>
                                ) : ''}

                                {subjectInfo.exams.filter((exam) => exam.category === 'P2').length ? (
                                  <>
                                    <Text fill alignSelf="center" size="large">P2</Text>
                                    <List
                                      pad={{ left: 'small', right: 'none' }}
                                      data={subjectInfo.exams.filter((exam) => exam.category === 'P2').sort((a, b) => a.title - b.title)}
                                      primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.teacher.name}`}</a>)}
                                    />
                                  </>
                                ) : ''}

                                {subjectInfo.exams.filter((exam) => exam.category === 'P3').length ? (
                                  <>
                                    <Text fill alignSelf="center" size="large">P3</Text>
                                    <List
                                      pad={{ left: 'small', right: 'none' }}
                                      data={subjectInfo.exams.filter((exam) => exam.category === 'P3').sort((a, b) => a.title - b.title)}
                                      primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.teacher.name}`}</a>)}
                                    />
                                  </>
                                ) : ''}

                                {subjectInfo.exams.filter((exam) => exam.category === '2ch').length ? (
                                  <>
                                    <Text fill alignSelf="center" size="large">2ch</Text>
                                    <List
                                      pad={{ left: 'small', right: 'none' }}
                                      data={subjectInfo.exams.filter((exam) => exam.category === '2ch').sort((a, b) => a.title - b.title)}
                                      primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.teacher.name}`}</a>)}
                                    />
                                  </>
                                ) : ''}

                                {subjectInfo.exams.filter((exam) => exam.category === 'Outras').length ? (
                                  <>
                                    <Text fill alignSelf="center" size="large">Outras</Text>
                                    <List
                                      pad={{ left: 'small', right: 'none' }}
                                      data={subjectInfo.exams.filter((exam) => exam.category === 'Outras').sort((a, b) => a.title - b.title)}
                                      primaryKey={(item) => (<a href={item.link} target="_blank" rel="noreferrer">{`${item.title} - ${item.teacher.name}`}</a>)}
                                    />
                                  </>
                                )
                                  : ''}
                              </Box>
                            </Box>
                          </Box>
                        </AccordionPanel>
                      ))
                    }
              </Accordion>
            </>
          ))}
        </Box>
      </Box>
    </Grommet>
  );
}
