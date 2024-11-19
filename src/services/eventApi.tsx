import axios from 'axios';
import { Event } from '../types/Event';

const API_URL = 'http://localhost:8081/events/list';

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};