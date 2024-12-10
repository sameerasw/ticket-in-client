import axios from 'axios';
import { Event } from '../types/Event';
import config from '../config';

const API_URL = `${config.API_BASE_URL}/events`;

export const fetchEvents = async (): Promise<Event[]> => {
  // GET /events/list
  try {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const createEvent = async (event: Event): Promise<Event> => {
  // POST /events
  try {
    const response = await axios.post(API_URL, event);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const fetchEventsByVendor = async (vendorId: number): Promise<Event[]> => {
  // GET /events/{vendorId}/list
  try {
    const response = await axios.get(`${API_URL}/${vendorId}/list`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching events for vendor ${vendorId}:`, error);
    throw error;
  }
};

export const getEventById = async (eventId: number): Promise<Event> => {
  // GET /events/{eventId}
  try {
    const response = await axios.get(`${API_URL}/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    throw error;
  }
};