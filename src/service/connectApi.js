import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.REACT_APP_PORT}`
  : process.env.REACT_APP_API_URL;

export function postExam(body) {
  return axios.post(`${BASE_URL}/exams`, body);
}

export function getExams() {
  return axios.get(`${BASE_URL}/exams`);
}

export function getSubjectsTeachers() {
  return axios.get(`${BASE_URL}/subjects/teachers`);
}

export function getSubjectsExams() {
  return axios.get(`${BASE_URL}/subjects/exams`);
}

export function getTeachers() {
  return axios.get(`${BASE_URL}/teachers`);
}

export function getTeachersExams() {
  return axios.get(`${BASE_URL}/teachers/exams`);
}
