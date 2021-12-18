import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4002'
  : 'https://repropovas.herokuapp.com';

export function postExam(body) {
  return axios.post(`${BASE_URL}/exams`, body);
}

export function getSubjects() {
  return axios.get(`${BASE_URL}/subjects`);
}

export function getTeachers() {
  return axios.get(`${BASE_URL}/teachers`);
}

export function getExams() {
  return axios.get(`${BASE_URL}/exams`);
}

export function getSubjectById(id) {
  return axios.get(`${BASE_URL}/subjects/${id}`);
}

export function getTeacherById(id) {
  return axios.get(`${BASE_URL}/teachers/${id}`);
}
