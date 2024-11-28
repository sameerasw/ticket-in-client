import axios from 'axios';
import { Ticket } from '../types/Ticket';

const API_URL = 'http://192.168.100.53:8081/tickets/list';

export const fetchTickets = async (): Promise<Ticket[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};