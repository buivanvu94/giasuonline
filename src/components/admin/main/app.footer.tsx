import React from 'react'
import { Box, Typography } from '@mui/material'

export default function AppFooterAdmin() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#ffffff',
                padding: '1rem',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
        >
            <Typography
                variant="body2"
                align="center"
                sx={{
                    color: '#4c5c6c',
                }}
            >
                © 2024 Your Company Name. All rights reserved.
            </Typography>
        </Box>
    )
}