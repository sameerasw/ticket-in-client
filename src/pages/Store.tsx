import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TicketCard from '../components/store/TicketCard';
import StyledPaper from '../components/StyledPaper';
import { Container, Paper } from '@mui/material';
import { fetchEvents } from '../services/eventApi';
import { Event } from '../types/Event';

const Store = () => {
  const [events, setActiveEvent] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const getTickets = async () => {
      try {
        const data = await fetchEvents();
        setActiveEvent(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    getTickets();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper>
      <Navbar onSearch={handleSearch} />
      <StyledPaper>
        <Container sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '3rem' }}>
          {filteredEvents.map(event => (
            <TicketCard key={event.eventId} event={event} />
          ))}
        </Container>
      </StyledPaper>
    </Paper>
  );
};

export default Store;