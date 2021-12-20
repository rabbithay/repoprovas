/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Box, Form, Grommet, FormField, TextInput, Select, Text, Button,
} from 'grommet';
import { theme } from '../styles/theme';
import { AppBar } from '../components/AppBar';
import { getSubjectsTeachers, postExam } from '../service/connectApi';

const defaultValue = {
  title: '',
  category: '',
  subject: '',
  teacher: '',
  link: '',
};

export default function SendExam() {
  const [value, setValue] = useState(defaultValue);
  const [showMessage, setShowMessage] = useState(false);
  const [teacherOptions, setTeacherOptions] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjectsTeachers().then((res) => {
      setSubjects(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const theSubject = subjects.find((sub) => sub.title === value.subject.title);
    setTeacherOptions(theSubject?.teachers || []);
  }, [value]);

  const subjectOptions = subjects;
  console.log(subjects);

  const categoryOptions = ['P1', 'P2', 'P3', '2ch', 'Outras'];

  const message = (!value.title || !value.category || !value.subject || !value.teacher || !value.link)
    ? 'É necessário preencher todos os campos'
    : undefined;

  function sendExam(examInfo) {
    if (message) return;
    const {
      title, category, subject, teacher, link,
    } = examInfo;
    const body = {
      title,
      category,
      subjectId: subject.id,
      teacherId: teacher.id,
      link,
    };
    postExam(body).then((res) => {
      console.log(res.status);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Grommet theme={theme} full>
      <AppBar />
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
            onReset={() => {
              setValue(defaultValue);
              setShowMessage(false);
            }}
            onSubmit={(event) => {
              setShowMessage(!!message);
              sendExam(event.value);
            }}
          >
            <FormField label="Titulo" name="title">
              <TextInput name="title" placeholder="2020.1" />
            </FormField>

            <FormField label="Categoria" name="category">
              <Select name="category" options={categoryOptions} />
            </FormField>

            <FormField label="Disciplina" name="subject">
              <Select name="subject" options={subjectOptions} labelKey="title" valueKey="id" />
            </FormField>

            <FormField label="Professor(a)" name="teacher">
              <Select name="teacher" options={teacherOptions} labelKey="name" valueKey="id" />
            </FormField>

            <FormField label="Link para o PDF" name="link">
              <TextInput name="link" />
            </FormField>

            {showMessage && (
              <Box pad={{ horizontal: 'small' }}>
                <Text color="status-error">{message}</Text>
              </Box>
            )}

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Enviar" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
