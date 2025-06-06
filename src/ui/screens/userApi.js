import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8080/api';

export const registerUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/create`, data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/login`, data);
  return response.data;
};

export const uploadInsurance = async (data, token) => {
  await axios.post(`${BASE_URL}/insurance/upload`, data, {
    headers: { Authorization: token },
  });
};

export const requestCode = async (email) => {
  await axios.post(`${BASE_URL}/request-code/${email}`);
};

export const validateCode = async (data) => {
  await axios.post(`${BASE_URL}/validate-code`, data);
};

export const changePassword = async (data, token) => {
  await axios.put(`${BASE_URL}/change-password`, data, {
    headers: { Authorization: token },
  });
};

export const getInsurance = async (token) => {
  const response = await axios.get(`${BASE_URL}/insurance/get`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export const deleteUser = async (token) => {
  await axios.delete(`${BASE_URL}/delete`, {
    headers: { Authorization: token },
  });
};

export const editUser = async (data, token) => {
  await axios.put(`${BASE_URL}/edit`, data, {
    headers: { Authorization: token },
  });
};