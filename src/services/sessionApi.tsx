import axios from 'axios';

const API_URL = 'http://192.168.100.53:8081';

export const login = async (email: string, password: string, userType: string) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, { email, password, userType });
  return response.data;
};

export const register = async (name: string, email: string, password: string, userType: string) => {
  const response = await axios.post(`${API_URL}/${userType}`, { name, email, password });
  return response.data;
};