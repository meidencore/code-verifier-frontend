// Theme personalization of material UI
import { styled, createTheme, ThemeProvider } from "@mui/material"
// CSS & Drawer
import CssBaseline from "@mui/material/CssBaseline"
import MuiDrawer from "@mui/material/Drawer"
// Material Navbar
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
// Material List
import List from "@mui/material/List"
// Material Icon
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import Logout from "@mui/icons-material/Logout"
// Material Grid & Box
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from '@mui/material/Typography'

// List for the menu
import MenuItems from "./MenuItems"
import { useState } from "react"

// width for the drawer
const drawerWidth: number = 240

// Props for the AppBar
interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

// AppBar
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => (
    {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        })
    }
))

// Drawer
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => (
    {
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'noWrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(7),
                // breakpoint to media queries of CSS in different display sizes 
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9)
                }
            })
        }
    }
))

const myTheme = createTheme();

// TODO Refactor with navigations Components
const Dashboard = () => {
    const [ open, setOpen ] = useState<boolean>(false)

    // Show /Hide Drawer Menu
    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
       <ThemeProvider theme={myTheme}>
            <Box sx={
                {
                    display: 'flex'
                }
            }>
                <CssBaseline />
                <AppBar 
                    position='absolute'
                    open={open}
                >
                    {/* Toolbar ==>  Actions */}
                    <Toolbar sx={{pr: "24px"}}>
                        {/* Icon to toggle the Drawer */}
                        <IconButton
                            edge='start'
                            color="inherit"
                            aria-label='open drawer'
                            onClick={toggleDrawer}
                            style={{
                                marginRight: '36px',
                                ...(open && {
                                    display: 'none'
                                })
                            }
                            }
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Title of App */}
                        <Typography
                            component='h1'
                            variant="h6"
                            color='inherit'
                            noWrap
                            sx={{
                                flexGrow: 1
                            }}
                        >
                            Code Verification Katas
                        </Typography>
                        {/* Icon to Show notifications */}
                        <IconButton color="inherit" sx={{ mx: 3}}>
                            <Badge badgeContent={10} color='secondary'>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* Icon to Logout */}
                        <IconButton color="inherit">
                                <Logout />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant='permanent' open={open}>
                    <Toolbar sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1]
                    }}>
                        {/* Icon to Hide the Menu */}
                        <IconButton color="inherit" onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component='nav'>
                        { MenuItems }
                    </List>
                </Drawer>
                {/* Body of the Dashboard */}
                <Box
                    component='main'
                    sx={{
                        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto'
                    }}
                >
                    {/* Toolbar */}
                    <Toolbar />
                    {/* Container with the content */}
                    {/* TODO Change with the navigation content by URL and Stack of Routes */}
                    <Container maxWidth='lg' sx={{ mt: 4, mg: 4 }}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240
                            }}>
                            </Paper>
                        </Grid>
                    </Container>
                </Box>
            </Box>
       </ThemeProvider> 
    )
}

export default Dashboard
