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

interface TicketDetailsProps {
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

const TicketDetails: React.FC<TicketDetailsProps> = ({ open, onClose, event }) => {
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

        backdropFilter:"blur(20px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: alpha(theme.palette.background.default, 0.3),
        color: theme.palette.text.primary,
            }}
        >
            <Box component="img" src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="green iguana" sx={{ height: '50vh', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            <DialogTitle id="responsive-dialog-title">
                {event.eventName}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Vendor: {event.vendor.name}
                </DialogContentText>
                <DialogContentText>
                    Ticket Price: ${event.ticketPrice}
                </DialogContentText>
                <DialogContentText>
                    Available Tickets: {event.ticketPool.availableTickets}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{padding: '1rem'}}>
                <Button autoFocus onClick={onClose}>
                    Close
                </Button>
                <Button variant="outlined" endIcon={<BookmarkAddRoundedIcon />}>
                    Watchlist
                </Button>
                <Button variant="contained" endIcon={<ConfirmationNumberRoundedIcon />}>
                    Buy Ticket
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TicketDetails;