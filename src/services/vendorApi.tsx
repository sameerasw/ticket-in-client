import axios from 'axios';

const API_URL = 'http://192.168.100.53:8081/vendors';

export const releaseTickets = async (eventId: number, ticketCount: number): Promise<string> => {
  try {
    const response = await axios.get(`${API_URL}/${eventId}/release`, {
      params: { ticketCount }
    });
    return response.data;
  } catch (error) {
    console.error('Error releasing tickets:', error);
    throw error;
  }
};