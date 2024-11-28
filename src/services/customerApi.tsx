import axios from 'axios';

const API_URL = 'http://192.168.100.53:8081/customers';

export const purchaseTicket = async (customerId: number, eventItemId: number): Promise<string> => {
  try {
    const response = await axios.get(`${API_URL}/${customerId}/buy/${eventItemId}`);
    return response.data;
  } catch (error) {
    console.error('Error purchasing ticket:', error);
    throw error;
  }
};