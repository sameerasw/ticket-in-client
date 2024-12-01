import { Container, Typography, Box, List, ListItem, ListItemText, CircularProgress, ListItemAvatar, Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import StyledPaper from '../components/StyledPaper';
import { getCustomerTickets } from '../services/customerApi';
import { TicketDTO } from '../types/Ticket';

interface CustomerProfileProps {
  userId: number | null;
  userName: string | null;
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({ userId, userName }) => {
  const [tickets, setTickets] = useState<TicketDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      if (userId) {
        try {
          const data = await getCustomerTickets(userId);
          setTickets(data);
        } catch (error) {
          console.error('Error fetching customer tickets:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTickets();
  }, [userId]);

  return (
    <div>
      <Navbar onSearch={() => { }} />
      <StyledPaper>
        <Container sx={{ paddingTop: '3rem', height: '100vh' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', marginY: '2rem' }}>
            Welcome, <span style={{ color: 'primary.main' }}>{userName}</span>
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', marginY: '2rem' }}>
            Your Tickets
          </Typography>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <CircularProgress />
            </Box>
          ) : (
            <List>
              {tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar src={ticket.imageUrl} alt={ticket.eventName} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={ticket.eventName}
                      secondary={`Date: ${ticket.dateTime} | Ticket ID: ${ticket.ticketId}`}
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  You have no tickets.
                </Typography>
              )}
            </List>
          )}
        </Container>
      </StyledPaper>
    </div>
  );
};

export default CustomerProfile;