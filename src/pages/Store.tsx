import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import EventCard from '../components/store/EventCard';
import StyledPaper from '../components/StyledPaper';
import { Container, Paper, Typography } from '@mui/material';
import { fetchEvents } from '../services/eventApi';
import { Event } from '../types/Event';
import EventDetails from '../components/store/EventDetails';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Box, styled } from '@mui/system';

const Store = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoading(false);
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

  const SpinningIcon = styled(ConfirmationNumberIcon)({
    animation: 'spin 2s ease-in-out infinite',
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  });

  return (
    <Paper>
      <Navbar onSearch={handleSearch} />
      <StyledPaper>
        <Container sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '3rem', justifyContent: 'center' }}>
          {loading ? (
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '75vh',
            }}>
              <SpinningIcon sx={{ color: 'primary.main', fontSize: 100 }} />
            </Box>
          ) : (
            filteredEvents.map(event => (
              <EventCard key={event.eventId} event={event} onClick={() => handleCardClick(event)} />
            ))
          )}
        </Container>
      </StyledPaper>
      <EventDetails open={dialogOpen} onClose={handleDialogClose} event={selectedEvent} />
    </Paper>
  );
};

export default Store;