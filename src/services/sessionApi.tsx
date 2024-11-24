import axios from 'axios';

const API_URL = 'http://localhost:8081';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/customers`, { name, email, password });
  return response.data;
};