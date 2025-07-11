import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://desarrollo-backend-production.up.railway.app/api/appointment';

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

export const getAppointments = async (token) => {
 const response = await axios.get(`${BASE_URL}/from-user`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const getAppointmentHistory = async (token) => {
  const response = await axios.get(`${BASE_URL}/history`, {
    headers: { Authorization: token },
  });
  return response.data;
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
  const headers = await getAuthHeaders(); // esto devuelve { Authorization: 'Bearer ...' }
  return axios.get(`${BASE_URL}/result/${appointmentId}`, headers);
};

export const getSpecialties = async () => {
  return axios.get(`${BASE_URL}/specialties`);
};


export const createAppointmentBySpecialty = async ( specialty,appointmentData) => {
  const headers = await getAuthHeaders();
  return axios.post(`${BASE_URL}/create/${specialty}`, appointmentData, headers);
};