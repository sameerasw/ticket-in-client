import { Paper } from '@mui/material'
import React from 'react'

interface StyledPaperProps {
    children: React.ReactNode;
}

const StyledPaper: React.FC<StyledPaperProps> = ({ children }) => {
    return (
        <Paper 
        sx={{ 
            minHeight: "100vh",
            height: "fit-content",
            width: "fill-available",
            margin: "0",
            borderRadius: "0",
             }}
             >
            {children}
        </Paper>
    );
};

export default StyledPaper;