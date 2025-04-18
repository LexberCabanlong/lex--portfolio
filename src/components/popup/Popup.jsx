import React from 'react';
import { Email, LinkedIn } from '@mui/icons-material'; // Make sure LinkedIn is imported
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
} from '@mui/material';
import { Stack } from '@mui/material';

const MuiPopup = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogContent>
                <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Email color="action" />
                    <Typography>
                        lexber.cabanlong@example.com
                    </Typography>
                </Stack>

                {/* LinkedIn Section */}
                <Stack direction="row" alignItems="center" spacing={1}>
                    <LinkedIn color="primary" />
                    <Typography>
                    <a
                        href="https://www.linkedin.com/in/lexber-cabanlong-7065a0142/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lexber Cabanlong
                    </a>
                    </Typography>
                </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">
                Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MuiPopup;