import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://10.0.2.2:8080/api/appointment';

const getAuthHeaders = async () => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      Authorization: token
    }
  };
};

export const createAppointment = async (appointmentData) => {
  const headers = await getAuthHeaders();
  return axios.post(`${BASE_URL}/create`, appointmentData, headers);
};

export const getAppointments = async () => {
  const headers = await getAuthHeaders();
  return axios.get(`${BASE_URL}/from-user`, headers);
};

export const deleteAppointment = async (appointmentData) => {
  const headers = await getAuthHeaders();
  return axios.delete(`${BASE_URL}/delete`, {
    ...headers,
    data: appointmentData
  });
};

export const editAppointment = async (appointmentData) => {
  const headers = await getAuthHeaders();
  return axios.put(`${BASE_URL}/edit`, appointmentData, headers);
};

export const uploadResultImage = async (appointmentId, file) => {
  const headers = await getAuthHeaders();
  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    name: file.name,
    type: file.type
  });
  return axios.post(`${BASE_URL}/result/load/${appointmentId}`, formData, {
    headers: {
      ...headers.headers,
      'Content-Type': 'multipart/form-data',
    }
  });
};

export const getResultImage = async (appointmentId) => {
  const headers = await getAuthHeaders();
  return axios.get(`${BASE_URL}/result/${appointmentId}`, {
    ...headers,
    responseType: 'arraybuffer', // o 'blob' si lo usás en web
  });
};

export const getSpecialties = async () => {
  return axios.get(`http://10.0.2.2:8080/api/appointment/specialties`);
};

export const getAvailableDates = async () => {
  const headers = await getAuthHeaders();
  return axios.get(`http://10.0.2.2:8080/api/appointment/date`, headers);
};

export const getAvailableTimes = async () => {
  const headers = await getAuthHeaders();
  return axios.get(`${BASE_URL}/time`, headers);
};

export const getAvailableDatesByDoctor = async (doctorId) => {
  const headers = await getAuthHeaders();
  return axios.get(`${BASE_URL}/${doctorId}/available-dates`, headers);
};

export const getAvailableTimesByDoctorAndDate = async (doctorId, date) => {
  const headers = await getAuthHeaders();
  return axios.get(`${BASE_URL}/${doctorId}/available-times`, {
    ...headers,
    params: { date }
  });
};

export const createAppointmentBySpecialty = async ( specialty,appointmentData) => {
  const headers = await getAuthHeaders();
  return axios.post(`http://10.0.2.2:8080/api/appointment/create/${specialty}`, appointmentData, headers);
};