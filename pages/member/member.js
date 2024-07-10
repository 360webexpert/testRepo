import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import ErrorIcon from '@mui/icons-material/Error';
import Toolbar from '@mui/material/Toolbar';
import { Container, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem,
  RadioGroup, FormControlLabel, Radio, Typography, Box, Input, InputAdornment, IconButton,
  Modal, Card, CardContent, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const drawerWidth = 240;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  
export default function Member(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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
      <List
         className="Hellooo">
        {['Dashboard', 'History', 'Member'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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

  
  const [gender, setGender] = React.useState('');

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  
  const [jobTitle, setJobTitle] = React.useState('');

  const handleChangejobTitle = (event) => {
    setJobTitle(event.target.value);
  };

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
    
      <Box
        component="main"
        className="mt-24 bg-[#F4F6F6] min-h-screen"
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <Box className="p-7 bg-white text-[#1A1A1A] text-2xl uppercase font-semibold flex items-center">
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="tab_styleOne">
            <Tab label="Applicants" {...a11yProps(0)} />
            <Tab label="verified" {...a11yProps(1)} />
            <Tab label="reject" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <Box
          component="section"
          sx={{ flexGrow: 1, p: 3, }}
        >
          
          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <Card className="p-5 shadow-none rounded-lg h-full">
                <CardContent className="p-0">
                  <Box sx={{ width: '100%' }}>
                    <CustomTabPanel value={value} index={0}>
                      <Box sx={{ width: '100%' }}>
                        <TableContainer component={Paper} className="table_styleOne mb-10">
                          <Table sx={{ minWidth: 680 }} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Applicants</TableCell>
                                <TableCell>Application time</TableCell>
                                <TableCell>Job Title</TableCell>
                                <TableCell>information</TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Stack spacing={2} className="pagination_styleOne">
                          <Pagination count={10} color="primary"/>
                        </Stack>
                      </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <Box sx={{ width: '100%' }}>
                        <TableContainer component={Paper} className="table_styleOne mb-10">
                          <Table sx={{ minWidth: 680 }} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Applicants</TableCell>
                                <TableCell>Application time</TableCell>
                                <TableCell>Job Title</TableCell>
                                <TableCell>information</TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Stack spacing={2} className="pagination_styleOne">
                          <Pagination count={10} color="primary"/>
                        </Stack>
                      </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                      <Box sx={{ width: '100%' }}>
                        <TableContainer component={Paper} className="table_styleOne mb-10">
                          <Table sx={{ minWidth: 680 }} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Applicants</TableCell>
                                <TableCell>Application time</TableCell>
                                <TableCell>Job Title</TableCell>
                                <TableCell>information</TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Xiao-Ming Wang</TableCell>
                                  <TableCell>1979/1/1</TableCell>
                                  <TableCell>Physician</TableCell>
                                  <TableCell>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none">More</Button>
                                  </TableCell>
                                  <TableCell>
                                    <Button onClick={handleOpen} className="h-10 px-6 py-1.5 text-lg font-medium text-white bg-blue-500 hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none me-3"><CheckIcon/></Button>
                                    <Button className="h-10 px-6 py-1.5 text-lg font-medium text-gray-700 hover:text-white bg-[#D9D9D9] hover:bg-themeBlue-200 border-0 border-transparent rounded-md capitalize focus:outline-none"><CloseIcon/></Button>
                                  </TableCell>
                                </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Stack spacing={2} className="pagination_styleOne">
                          <Pagination count={10} color="primary"/>
                        </Stack>
                      </Box>
                    </CustomTabPanel>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* <Button onClick={handleOpen}>Open modal</Button> */}

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="p-5"
            >
              <Box sx={modalStyle} className="px-10 lg:px-20 py-10 lg:py-14 max-h-[90vh] overflow-y-auto">
                <Box id="modal-modal-description" className="font-medium">
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *First name
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Kamrul"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Last name
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Hasan"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Nationality
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Taiwan"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Birthday
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="1979/1/1"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Acount( At least 8 characters)
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Kamrul"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={9}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                        *Email
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="email"
                          value="abc123@gmail.com"
                        />
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} lg={2}>
                      <Box className="custom_selectWithRadio mb-6">
                        <InputLabel htmlFor="gender">
                          *Gender
                        </InputLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <Select
                            labelId="gender"
                            value={gender}
                            onChange={handleChangeGender}
                          >
                            <MenuItem value={"women"}>
                              <FormControlLabel value="women" control={<Radio />} label="women" />
                            </MenuItem>
                            <MenuItem value={"men"}>
                              <FormControlLabel value="men" control={<Radio />} label="men" />
                            </MenuItem>
                            <MenuItem value={"other"}>
                              <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </MenuItem>
                          </Select>
                        </RadioGroup>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                      <Box className="custom_selectWithRadio mb-6">
                        <InputLabel htmlFor="gender">
                          *Years of Experience
                        </InputLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="jobTitle"
                          name="radio-buttons-group"
                        >
                          <Select
                            labelId="jobTitle"
                            value={jobTitle}
                            onChange={handleChangejobTitle}
                          >
                            <MenuItem value={"lessThanFiveYears"}>
                              <FormControlLabel value="lessThanFiveYears" control={<Radio />} label="Less than 5 years" />
                            </MenuItem>
                            <MenuItem value={"lessThanFourYears"}>
                              <FormControlLabel value="lessThanFourYears" control={<Radio />} label="Less than 4 years" />
                            </MenuItem>
                            <MenuItem value={"lessThanThreeYears"}>
                              <FormControlLabel value="lessThanThreeYears" control={<Radio />} label="Less than 3 years" />
                            </MenuItem>
                            <MenuItem value={"lessThanTwoYears"}>
                              <FormControlLabel value="lessThanTwoYears" control={<Radio />} label="Less than 2 years" />
                            </MenuItem>
                            <MenuItem value={"lessThanOneYears"}>
                              <FormControlLabel value="lessThanOneYears" control={<Radio />} label="Less than 1 years" />
                            </MenuItem>
                          </Select>
                        </RadioGroup>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                      <Box className="custom_selectWithRadio mb-6">
                        <InputLabel htmlFor="gender">
                          *Specialty
                        </InputLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="jobTitle"
                          name="radio-buttons-group"
                        >
                          <Select
                            labelId="jobTitle"
                            value={jobTitle}
                            onChange={handleChangejobTitle}
                          >
                            <MenuItem value={"generalPsychiatry"}>
                              <FormControlLabel value="generalPsychiatry" control={<Radio />} label="General Psychiatry" />
                            </MenuItem>
                            <MenuItem value={"neurology"}>
                              <FormControlLabel value="neurology" control={<Radio />} label="Neurology" />
                            </MenuItem>
                            <MenuItem value={"substanceAbuseAddicationPsychiatry"}>
                              <FormControlLabel value="substanceAbuseAddicationPsychiatry" control={<Radio />} label="Substance Abuse and Addication Psychiatry" />
                            </MenuItem>
                            <MenuItem value={"childAdolescentPsychiatry"}>
                              <FormControlLabel value="childAdolescentPsychiatry" control={<Radio />} label="Child and Adolescent Psychiatry" />
                            </MenuItem>
                            <MenuItem value={"other"}>
                              <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </MenuItem>
                          </Select>
                        </RadioGroup>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                      <Box className="custom_selectWithRadio mb-6">
                        <InputLabel htmlFor="gender">
                          *Job Title
                        </InputLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="jobTitle"
                          name="radio-buttons-group"
                        >
                          <Select
                            labelId="jobTitle"
                            value={jobTitle}
                            onChange={handleChangejobTitle}
                          >
                            <MenuItem value={"physician"}>
                              <FormControlLabel value="physician" control={<Radio />} label="Physician" />
                            </MenuItem>
                            <MenuItem value={"researcher"}>
                              <FormControlLabel value="researcher" control={<Radio />} label="Researcher" />
                            </MenuItem>
                            <MenuItem value={"public"}>
                              <FormControlLabel value="public" control={<Radio />} label="Public (Patient)" />
                            </MenuItem>
                            <MenuItem value={"other"}>
                              <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </MenuItem>
                          </Select>
                        </RadioGroup>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                      <Box className="custom_selectWithRadio mb-6">
                        <InputLabel htmlFor="gender">
                          *Work Location
                        </InputLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="jobTitle"
                          name="radio-buttons-group"
                        >
                          <Select
                            labelId="jobTitle"
                            value={jobTitle}
                            onChange={handleChangejobTitle}
                          >
                            <MenuItem value={"hospital"}>
                              <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                            </MenuItem>
                            <MenuItem value={"clinic"}>
                              <FormControlLabel value="clinic" control={<Radio />} label="Clinic" />
                            </MenuItem>
                            <MenuItem value={"medicalCenter"}>
                              <FormControlLabel value="medicalCenter" control={<Radio />} label="Medical Center" />
                            </MenuItem>
                            <MenuItem value={"researchInstitute"}>
                              <FormControlLabel value="researchInstitute" control={<Radio />} label="Research Institute" />
                            </MenuItem>
                            <MenuItem value={"other"}>
                              <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </MenuItem>
                          </Select>
                        </RadioGroup>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Modal>
        
        </Box>
      </Box>
    </Box>
  );
}
