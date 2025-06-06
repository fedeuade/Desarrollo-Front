import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8080/api/doctor';

const authHeader = (token) => ({
  headers: {
    Authorization: token,
  },
});

// Crear doctores (requiere ADMIN)
export const createDoctors = async (token) => {
  return await axios.post(`${API_URL}/create`, {}, authHeader(token));
};

// Eliminar doctores (requiere ADMIN)
export const deleteDoctors = async (token) => {
  return await axios.delete(`${API_URL}/delete`, authHeader(token));
};

// Buscar doctor por nombre (requiere USER)
export const searchDoctor = async (name, token) => {
  return await axios.get(`${API_URL}/${name}`, authHeader(token));
};

// Filtrar doctores (requiere USER)
export const filterDoctors = async (filterBody, token) => {
  return await axios.post(`${API_URL}/filter`, filterBody, authHeader(token));
};

// Obtener todos los doctores (no requiere autorización)
export const getAllDoctors = async () => {
  return await axios.get(`${API_URL}/all`);
};
