'use client'

import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { DirectionsCar, TwoWheeler, HomeWork, Hotel } from '@mui/icons-material'

const categories = [
    { name: 'Thuê xe ô tô', icon: <DirectionsCar /> },
    { name: 'Thuê xe máy', icon: <TwoWheeler /> },
    { name: 'Đặt Homestay', icon: <HomeWork /> },
    { name: 'Đặt khách sạn', icon: <Hotel /> },
]

export default function SidebarCategories() {
    return (
        <Paper elevation={3} sx={{ width: 240, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ p: 2, borderBottom: 1, borderColor: 'divider', textAlign: 'center', backgroundColor: '#2a9d8f', borderRadius: '10px 10px 0 0' }}>
                Danh mục
            </Typography>
            <List>
                {categories.map((category, index) => (
                    <ListItem

                        key={index}

                        component="div"
                        sx={{
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <ListItemIcon>{category.icon}</ListItemIcon>
                        <ListItemText primary={category.name} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}