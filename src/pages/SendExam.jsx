/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Box, Form, Grommet, FormField, TextInput, Select,
} from 'grommet';
import { theme } from '../styles/theme';
import { AppBar } from '../components/AppBar';

const defaultValue = {
  title: '',
  category: '',
  subject: '',
  teacher: '',
  link: '',
};
export default function SendExam() {
  const [value, setValue] = useState(defaultValue);

  const categoryOptions = ['P1', 'P2', 'P3', '2ch', 'Outras'];
  const subjectOptions = ['matematica', 'fisica', 'quimica'];
  const teacherOptions = ['P1', 'P2', 'P3', '2ch', 'Outras'];

  return (
    <Grommet theme={theme} full>
      <AppBar />
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={(nextValue, { touched }) => {
              console.log('Change', nextValue, touched);
              setValue(nextValue);
            }}
            onReset={() => setValue(defaultValue)}
            onSubmit={(event) => console.log('Submit', event.value, event.touched)}
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
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
