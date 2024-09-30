'use client'

import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

// Sample hotel data
const hotels = [
    {
        id: 1,
        name: 'Luxury Resort & Spa',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 299,
        address: '123 Beach Road, Paradise Island'
    },
    {
        id: 2,
        name: 'City Center Hotel',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 199,
        address: '456 Main Street, Downtown'
    },
    {
        id: 3,
        name: 'Mountain View Lodge',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 249,
        address: '789 Alpine Way, Highlands'
    },
    {
        id: 4,
        name: 'Seaside Boutique Hotel',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 179,
        address: '101 Coastal Drive, Beachtown'
    },
    {
        id: 5,
        name: 'Historic Grand Hotel',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 329,
        address: '202 Heritage Square, Old Town'
    },
    {
        id: 6,
        name: 'Modern Business Suites',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 219,
        address: '303 Commerce Blvd, Business District'
    },
    {
        id: 7,
        name: 'Tranquil Garden Inn',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 159,
        address: '404 Greenway Lane, Suburbia'
    },
    {
        id: 8,
        name: 'Skyline Penthouse Apartments',
        image: '/image/homestay.jpg?height=200&width=300',
        price: 399,
        address: '505 High Rise Avenue, City Center'
    }
]

export default function Homestaylist() {
    return (
        <Box sx={{
            flexGrow: 1, p: 4,
            h1: {
                textAlign: "center",
                marginBottom: "30px"
            }
        }}>

            <h1>HOMESTAY NỔI BẬT</h1>


            <Grid container spacing={4}>
                {hotels.map((hotel) => (
                    <Grid item key={hotel.id} xs={12} sm={6} md={3}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                boxShadow: 3,
                                '&:hover': {
                                    boxShadow: 6,
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.3s ease-in-out'
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={hotel.image}
                                alt={hotel.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {hotel.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    ${hotel.price} / night
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {hotel.address}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}