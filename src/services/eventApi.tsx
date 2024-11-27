import axios from 'axios';
import { Event } from '../types/Event';

const API_URL = 'http://192.168.100.53:8081/events';

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const createEvent = async (event: Event): Promise<Event> => {
  try {
    const response = await axios.post(API_URL, event);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};