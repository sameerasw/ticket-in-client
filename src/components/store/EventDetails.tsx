import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Event } from '../../types/Event';
import { TransitionProps } from '@mui/material/transitions';
import { alpha, Box, Grow } from '@mui/material';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';

interface EventDetailsProps {
    open: boolean;
    onClose: () => void;
    event: Event | null;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Grow ref={ref} {...props} />;
});

const EventDetails: React.FC<EventDetailsProps> = ({ open, onClose, event }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    if (!event) return null;

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            sx={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: alpha(theme.palette.background.default, 0.3),
                color: theme.palette.text.primary,
            }}
        >
            <Box component="img" src={event.image ?? 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'} alt="event image" sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                minHeight: '80vh',
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                width: "fill-available",
                margin: 1,
                borderRadius: 1,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                backgroundColor: alpha(theme.palette.background.paper, 0.7),
                color: theme.palette.text.primary,
                transition: 'all 0.3s ease-in-out',
            }}>
                <DialogTitle id="responsive-dialog-title">
                    {event.eventName}
                </DialogTitle>
                <DialogContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <DialogContentText>
                        {event.details}
                    </DialogContentText>
                    <Box sx={{
                        display: 'flex',
                        gap: '0.5rem',
                    }}>
                        <DialogContentText>
                            {event.eventDate}
                        </DialogContentText>
                        <DialogContentText>
                            {event.eventTime}
                        </DialogContentText>
                    </Box>
                    <DialogContentText>
                        Location: {event.eventLocation}
                    </DialogContentText>
                    <br />
                    <DialogContentText>
                        By: {event.vendorName}
                    </DialogContentText>
                    <DialogContentText>
                        Available Tickets: {event.availableTickets}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{
                    padding: '1rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                }}>
                    <Button autoFocus onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="outlined" endIcon={<BookmarkAddRoundedIcon />}>
                        Watchlist
                    </Button>
                    <Button variant="contained" endIcon={<ConfirmationNumberRoundedIcon />}>
                        Buy Ticket ${event.ticketPrice}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default EventDetails;