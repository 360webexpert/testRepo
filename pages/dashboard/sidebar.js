import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import ErrorIcon from '@mui/icons-material/Error';
import Toolbar from '@mui/material/Toolbar';
import { Container, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem,
  RadioGroup, FormControlLabel, Radio, Typography, Box, Input, InputAdornment, IconButton,
  Modal, Card, CardContent  } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

export default function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const router = useRouter();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Dashboard', 'History', 'Member'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => router.push(`/${text.toLowerCase()}`)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;


  const [eegOperatingTime, setEegOperatingTime] = React.useState('EEG after treatment');

  const handleChangeEegOperatingTime = (event) => {
    setEegOperatingTime(event.target.value);
  };

  const [interval, setInterval] = React.useState('');

  const handleChangeInterval = (event) => {
    setInterval(event.target.value);
  };
  
  const [hospital, setHospital] = React.useState('');

  const handleChangeHospital = (event) => {
    setHospital(event.target.value);
  };

  const [patientStatus, setPatientStatus] = React.useState('');

  const handleChangePatientStatus = (event) => {
    setPatientStatus(event.target.value);
  };

  const [eegExamination, setEegExamination] = React.useState('');

  const handleChangeeEegExamination = (event) => {
    setEegExamination(event.target.value);
  };

  const [benzodiazepines, setBenzodiazepines] = React.useState('');

  const handleChangeBenzodiazepines = (event) => {
    setBenzodiazepines(event.target.value);
  };
 
  const [physicianJudgement, setPhysicianJudgement] = React.useState('');

  const handleChangePhysicianJudgement = (event) => {
    setPhysicianJudgement(event.target.value);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#454CEA' : '#308fe8',
    },
  }));


  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "calc(100% - 40px)",
    maxWidth: "1199px",
    bgcolor: '#ffffff',
    border: '0px solid #000',
    borderRadius: "10px",
    outline: "none",
  };

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const submitModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "calc(100% - 40px)",
    maxWidth: "799px",
    bgcolor: '#ffffff',
    border: '0px solid #000',
    borderRadius: "10px",
    outline: "none",
  };

  const [submitModal, setSubmitModal] = React.useState(false);
  const handleSubmitOpen = () => setSubmitModal(true);
  const handleSubmitClose = () => setSubmitModal(false);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-white text-[#1A1A1A] shadow-sm py-4 px-2"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            English
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}
