import { Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import StyledPaper from '../components/StyledPaper'

interface CustomerProfileProps {
  userId: number | null;
  userName: string | null;
}

const CustomerProfile : React.FC<CustomerProfileProps> = ({ userId, userName }) => {
  return (
    <div>
    <Navbar onSearch={() => { }} />
    <StyledPaper>
      <Container sx={{ paddingTop: '3rem', height: '100vh' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', marginY: '2rem' }}>
          Welcome, <span style={{ color: 'primary.main' }}>{userName}</span>
        </Typography>

        </Container>
      </StyledPaper>
    </div>
  )}

export default CustomerProfile