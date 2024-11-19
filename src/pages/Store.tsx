import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TicketCard from '../components/store/TicketCard';
import StyledPaper from '../components/StyledPaper';
import { Container, Paper } from '@mui/material';
import { fetchTickets } from '../services/ticketApi';
import { Ticket } from '../types/Ticket';

const Store = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    getTickets();
  }, []);

  return (
    <Paper>
      <Navbar />
      <StyledPaper>
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {tickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </Container>
      </StyledPaper>
    </Paper>
  );
};

export default Store;