'use client'

import React, { useState } from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Paper,
    Typography,
    ListItemButton,
    IconButton,
    Box,
    Tooltip,
} from '@mui/material'
import {
    Dashboard,
    People,
    Article,
    DirectionsCar,
    TwoWheeler,
    Hotel,
    HomeWork,
    ExpandLess,
    ExpandMore,
    Add,
    List as ListIcon,
    ChevronLeft,
    ChevronRight,
} from '@mui/icons-material'

const categories = [
    { name: 'Dashboard', icon: <Dashboard /> },
    {
        name: 'User',
        icon: <People />,
        subItems: ['Danh sách người cho thuê', 'Danh sách khách hàng'],
    },
    {
        name: 'Bài viết',
        icon: <Article />,
        subItems: ['Danh mục bài viết', 'Thêm bài viết', 'Danh sách bài viết'],
    },
    {
        name: 'Ô tô cho thuê',
        icon: <DirectionsCar />,
        subItems: ['Thêm ô tô cho thuê', 'Danh sách ô tô cho thuê'],
    },
    {
        name: 'Xe máy cho thuê',
        icon: <TwoWheeler />,
        subItems: ['Thêm xe máy cho thuê', 'Danh sách xe máy cho thuê'],
    },
    {
        name: 'Khách sạn',
        icon: <Hotel />,
        subItems: ['Thêm khách sạn', 'Danh sách khách sạn'],
    },
    {
        name: 'Homestay',
        icon: <HomeWork />,
        subItems: ['Thêm homestay', 'Danh sách homestay'],
    },
]

export default function AdminSidebar() {
    const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({})
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleCategoryClick = (categoryName: string) => {
        if (!isCollapsed) {
            setOpenCategories((prevState) => ({
                ...prevState,
                [categoryName]: !prevState[categoryName],
            }))
        }
    }

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
        if (!isCollapsed) {
            setOpenCategories({})
        }
    }

    const renderSubItems = (subItems: string[], categoryName: string) => {
        return (
            <Collapse in={openCategories[categoryName]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subItems.map((item, index) => (
                        <ListItemButton key={index} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                {item.startsWith('Thêm') ? <Add /> : <ListIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        )
    }

    return (
        <Paper
            elevation={3}
            sx={{
                width: isCollapsed ? 64 : 280,
                height: '100vh',
                borderRadius: 0,
                overflowX: 'hidden',
                overflowY: 'auto',
                transition: 'width 0.3s',
                position: 'relative',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: 1, borderColor: 'divider' }}>
                {!isCollapsed && (
                    <Typography variant="h6" noWrap>
                        Admin Panel
                    </Typography>
                )}
                <IconButton onClick={toggleSidebar} sx={{ ml: isCollapsed ? 'auto' : 0 }}>
                    {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
                </IconButton>
            </Box>
            <List>
                {categories.map((category, index) => (
                    <React.Fragment key={index}>
                        <ListItem

                            component="div"
                            onClick={() => handleCategoryClick(category.name)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                                px: isCollapsed ? 1 : 2,
                                cursor: "pointer"
                            }}
                        >
                            <Tooltip title={isCollapsed ? category.name : ''} placement="right">
                                <ListItemIcon>{category.icon}</ListItemIcon>
                            </Tooltip>
                            {!isCollapsed && (
                                <>
                                    <ListItemText primary={category.name} />
                                    {category.subItems && (
                                        openCategories[category.name] ? <ExpandLess /> : <ExpandMore />
                                    )}
                                </>
                            )}
                        </ListItem>
                        {!isCollapsed && category.subItems && renderSubItems(category.subItems, category.name)}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}