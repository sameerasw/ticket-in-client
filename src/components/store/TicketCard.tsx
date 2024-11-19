import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Event } from '../../types/Event';


interface TicketCardProps {
    event: Event;
  }

const TicketCard: React.FC<TicketCardProps> = ({ event }) => {
  return (
    <Card sx={{ 
        maxWidth: 345,
        margin: 2,
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.eventName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            By : {event.vendor.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book [${event.ticketPrice}]
        </Button>
      </CardActions>
    </Card>
  );
}



// const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
//   return (
//     <div>
//       <h3>{ticket.id}</h3>
//       <p>{ticket.ticketPrice}</p>
//       <p>Price: ${ticket.ticketPrice}</p>
//     </div>
//   );
// };

export default TicketCard;