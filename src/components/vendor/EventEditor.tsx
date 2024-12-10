import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Event } from '../../types/Event';
import { TransitionProps } from '@mui/material/transitions';
import { alpha, Grow, TextField, Box, Typography, CircularProgress, Card } from '@mui/material';
import { releaseTickets } from '../../services/vendorApi';
import { useWebSocket } from '../../hooks/useWebSocket';

interface EventEditorProps {
    open: boolean;
    onClose: () => void;
    event: Event | null;
    vendorId: number | null;
    vendorName: string | null;
    fetchVendorEvents: () => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Grow ref={ref} {...props} />;
});

const EventEditor: React.FC<EventEditorProps> = ({ open, onClose, event, vendorId, vendorName, fetchVendorEvents }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [ticketCount, setTicketCount] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const { purchases, availableTickets, socket, resetPurchases } = useWebSocket(event?.id || null);

    const handleReleaseTickets = async () => {
        if (event && ticketCount > 0 && event.id) {
            setLoading(true);
            try {
                const response = await releaseTickets(event.id, ticketCount);
                setTicketCount(1);
                console.log(response);
                fetchVendorEvents();
            } catch (error) {
                console.error('Error releasing tickets:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleDialogClose = () => {
        setTicketCount(0);
        resetPurchases();
        onClose();
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleDialogClose}
            aria-labelledby="responsive-dialog-title"
            sx={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: alpha(theme.palette.background.default, 0.3),
                color: theme.palette.text.primary,
            }}
        >
            <DialogTitle id="responsive-dialog-title">
                {event ? `Manage Event: ${event.eventName}` : 'Manage Event'}
            </DialogTitle>
            <DialogContent>
                {event && (
                    <>
                        <Box sx={{ marginTop: 2 }}>
                            <Typography variant="h6">Release New Tickets</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'rows',
                                gap: '0.5rem',
                                alignItems: 'center',
                            }}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="ticketCount"
                                    label="Number of Tickets"
                                    name="ticketCount"
                                    type="number"
                                    value={ticketCount}
                                    onChange={(e) => setTicketCount(parseInt(e.target.value))}
                                />
                                <Typography variant="body2" color="textSecondary" sx={{
                                    marginLeft: '1rem',
                                }}>
                                    Available: {availableTickets}
                                </Typography>
                            </Box>
                            <Button variant="contained" onClick={handleReleaseTickets} disabled={loading}>
                                {loading ? <CircularProgress size={24} /> : 'Release Tickets'}
                            </Button>
                        </Box>
                        <Box sx={{ marginTop: 4 }}>
                            <Typography variant="h6" sx={{ textAlign: 'center', marginY: '2rem' }}>
                                Real-Time Ticket Purchases Log
                            </Typography>
                                    <Card sx={{
                                        marginTop: 'auto',
                                        padding: '1rem 2rem',
                                        backgroundColor: 'background.default',
                                    }} variant='outlined'>
                                        Connection : {socket?.readyState === WebSocket.OPEN ? '🟢' : '🔴'} Logs will be displayed here in real-time.
                                    </Card>
                            <Box sx={{ marginTop: 4 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '60vh', padding: '1rem' }}>
                                    <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
                                        {purchases.slice().reverse().map((purchase, index) => (
                                            <Card key={index} sx={{ marginBottom: '1rem', padding: '1rem' }}>
                                                {purchase.includes('purchased') ? '🎫' : '🎟️'} {purchase}
                                            </Card>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} disabled={loading}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EventEditor;