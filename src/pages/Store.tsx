import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TicketCard from '../components/store/TicketCard';
import StyledPaper from '../components/StyledPaper';
import { Container, Paper } from '@mui/material';
import { fetchEvents } from '../services/eventApi';
import { Event } from '../types/Event';
import TicketDetails from '../components/store/TicketDetails';

const Store = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    getTickets();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter(event =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper>
      <Navbar onSearch={handleSearch} />
      <StyledPaper>
        <Container sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '3rem', justifyContent: 'center'}}>
          {filteredEvents.map(event => (
            <TicketCard key={event.eventId} event={event} onClick={() => handleCardClick(event)} />
          ))}
        </Container>
      </StyledPaper>
      <TicketDetails open={dialogOpen} onClose={handleDialogClose} event={selectedEvent} />
    </Paper>
  );
};

export default Store;