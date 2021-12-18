/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Box, Form, Grommet, FormField, TextInput, Select, Text, Button,
} from 'grommet';
import { theme } from '../styles/theme';
import { AppBar } from '../components/AppBar';
import { subjects } from '../styles/draft';

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

  useEffect(() => {
    const theSubject = subjects.find((sub) => sub.title === value.subject);
    setTeacherOptions(theSubject?.teachers.map((teacher) => teacher.name) || []);
  }, [value]);

  const subjectOptions = subjects.map((sub) => sub.title);

  const categoryOptions = ['P1', 'P2', 'P3', '2ch', 'Outras'];

  const message = (!value.title || !value.category || !value.subject || !value.teacher || !value.link)
    ? 'É necessário preencher todos os campos'
    : undefined;

  return (
    <Grommet theme={theme} full>
      <AppBar />
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
              console.log('Change ', nextValue);
            }}
            onReset={() => {
              setValue(defaultValue);
              setShowMessage(false);
            }}
            onSubmit={(event) => {
              setShowMessage(!!message);
              console.log('Submit', event.value, event.touched);
            }}
          >
            <FormField label="Titulo" name="title">
              <TextInput name="title" placeholder="2020.1" />
            </FormField>
            <FormField label="Categoria" name="category">
              <Select name="category" options={categoryOptions} />
            </FormField>
            <FormField label="Disciplina" name="subject">
              <Select name="subject" options={subjectOptions} />
            </FormField>
            <FormField label="Professor(a)" name="teacher">
              <Select name="teacher" options={teacherOptions} />
            </FormField>
            <FormField label="Link do PDF" name="link">
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
