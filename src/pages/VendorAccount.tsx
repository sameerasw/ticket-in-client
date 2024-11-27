import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import StyledPaper from '../components/StyledPaper';
import { fetchEvents } from '../services/eventApi';
import { Box, Button, Card, Container, Typography } from '@mui/material';
import EventCard from '../components/store/EventCard';
import { Event } from '../types/Event';
import EventEditor from '../components/vendor/EventEditor';

interface VendorAccountProps {
  userId: number | null;
  userName: string | null;
}

const VendorAccount: React.FC<VendorAccountProps> = ({ userId, userName }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

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

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  const handleCreateEventClick = () => {
    setSelectedEvent(null);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedEvent(null);
  };

  const handleSaveEvent = (event: Event) => {
    // save or update event (WIP)
    console.log('Event saved:', event);
    handleDialogClose();
  };

  return (
    <>
      <Navbar onSearch={() => { }} />
      <StyledPaper>
        <Container sx={{ marginTop: '3rem' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', marginY: '2rem' }}>
            Welcome, <span style={{ color: 'primary.main' }}>{userName}</span>
          </Typography>
          <Card variant='outlined' sx={{ padding: '1rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingX: '1rem' }}>
              <Typography variant="h6" sx={{ textAlign: 'left', flexGrow: 1 }}>
                Event Management
              </Typography>
              <Button variant='contained' color='primary' sx={{ margin: '1rem' }} onClick={handleCreateEventClick}>
                Create Event
              </Button>
            </Box>
            <Container sx={{ display: 'flex', flexDirection: 'rows', justifyContent: 'start', overflowX: 'auto', marginY: '1rem' }}>
              {loading ? (
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '75vh',
                }}>
                  Loading ...
                </Box>
              ) : (
                events.map(event => (
                  <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
                ))
              )}
            </Container>
          </Card>
        </Container>
      </StyledPaper>
      <EventEditor open={dialogOpen} onClose={handleDialogClose} event={selectedEvent} onSave={handleSaveEvent} vendorId={userId} vendorName={userName} />
    </>
  );
}

export default VendorAccount;