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

export default function History(props) {
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
    
     
      <Box
        component="main"
        className="mt-24 bg-[#F4F6F6] min-h-screen"
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <h1 className="p-8 bg-white text-[#1A1A1A] text-2xl uppercase font-semibold flex items-center">Dashboard <ErrorIcon className="ms-2"/></h1>
        <Box
          component="section"
          sx={{ flexGrow: 1, p: 3, }}
        >
          
          <Grid container spacing={2.5}>
            <Grid item xs={12} xl={6}>
              <Card className="p-12 lg:p-24 shadow-none rounded-lg h-full">
                <CardContent>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6} lg={4}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Chart No
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="301024"
                          disabled
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          EEG date
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="20191222"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={5}>
                      <Box className="custom_selectOne mb-4">
                        <InputLabel htmlFor="firstName">
                          EEG Operating time
                        </InputLabel>
                        <Select
                          labelId="EEG Operating time"
                          value={eegOperatingTime}
                          onChange={handleChangeEegOperatingTime}
                        >
                          <MenuItem value={"EEG after treatment"}>
                            EEG after treatment
                          </MenuItem>
                          <MenuItem value={"EEG after treatment"}>
                            EEG after treatment
                          </MenuItem>
                          <MenuItem value={"EEG after treatment"}>
                            EEG after treatment
                          </MenuItem>
                          <MenuItem value={"EEG after treatment"}>
                            EEG after treatment
                          </MenuItem>
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="custom_selectWithRadio mb-4">
                        <InputLabel htmlFor="firstName">
                        Interval between EEG and initial treatment
                        </InputLabel>
                        <Select
                          labelId="interval"
                          value={interval}
                          onChange={handleChangeInterval}
                        >
                          <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                            <MenuItem value={"oneWeek"}>
                              <FormControlLabel value="oneWeek" control={<Radio />} label="One Week" />
                            </MenuItem>                          
                            <MenuItem value={"oneWeek"}>
                              <FormControlLabel value="oneWeek" control={<Radio />} label="Two Week" />
                            </MenuItem>                          
                            <MenuItem value={"oneWeek"}>
                              <FormControlLabel value="oneWeek" control={<Radio />} label="Three Week" />
                            </MenuItem>                          
                          </Box>
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="custom_selectWithRadio mb-4">
                        <InputLabel htmlFor="firstName">
                          Hospital
                        </InputLabel>
                        <Select
                          labelId="gender"
                          value={hospital}
                          onChange={handleChangeHospital}
                        >                          
                          <MenuItem value={"taipeiVeteransGeneralHospital"}>
                            <FormControlLabel value="taipeiVeteransGeneralHospital" control={<Radio />} label="Taipei Veterans General Hospital" />
                          </MenuItem>     
                          <MenuItem value={"taipeiVeteransGeneralHospital"}>
                            <FormControlLabel value="taipeiVeteransGeneralHospital" control={<Radio />} label="Taipei Veterans General Hospital" />
                          </MenuItem>     
                          <MenuItem value={"taipeiVeteransGeneralHospital"}>
                            <FormControlLabel value="taipeiVeteransGeneralHospital" control={<Radio />} label="Taipei Veterans General Hospital" />
                          </MenuItem>     
                          <MenuItem value={"taipeiVeteransGeneralHospital"}>
                            <FormControlLabel value="taipeiVeteransGeneralHospital" control={<Radio />} label="Taipei Veterans General Hospital" />
                          </MenuItem>     
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <Box className="custom_selectWithRadio mb-4">
                        <InputLabel htmlFor="firstName">
                          Patient status during EEG
                        </InputLabel>
                        <Select
                          labelId="Patient Status"
                          value={patientStatus}
                          onChange={handleChangePatientStatus}
                        >                          
                          <MenuItem value={"openEyeResting"}>
                            <FormControlLabel value="openEyeResting" control={<Radio />} label="open eye resting" />
                          </MenuItem>     
                          <MenuItem value={"openEyeResting"}>
                            <FormControlLabel value="openEyeResting" control={<Radio />} label="open eye resting" />
                          </MenuItem>     
                          <MenuItem value={"openEyeResting"}>
                            <FormControlLabel value="openEyeResting" control={<Radio />} label="open eye resting" />
                          </MenuItem>     
                          <MenuItem value={"openEyeResting"}>
                            <FormControlLabel value="openEyeResting" control={<Radio />} label="open eye resting" />
                          </MenuItem>     
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                      <Box className="custom_selectWithRadio mb-4">
                        <InputLabel htmlFor="firstName">
                          Purpose of EEG examination
                        </InputLabel>
                        <Select
                          labelId="eegExamination"
                          value={eegExamination}
                          onChange={handleChangeeEegExamination}
                        >                          
                          <MenuItem value={"diagnosisConfirmation"}>
                            <FormControlLabel value="diagnosisConfirmation" control={<Radio />} label="Diagnosis confirmation" />
                          </MenuItem>       
                          <MenuItem value={"diagnosisConfirmation"}>
                            <FormControlLabel value="diagnosisConfirmation" control={<Radio />} label="Diagnosis confirmation" />
                          </MenuItem>       
                          <MenuItem value={"diagnosisConfirmation"}>
                            <FormControlLabel value="diagnosisConfirmation" control={<Radio />} label="Diagnosis confirmation" />
                          </MenuItem>       
                        </Select>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} lg={7}>
                      <Box className="custom_selectWithRadio mb-4">
                        <InputLabel htmlFor="firstName">
                          *Concurrent use of benzodiazepines
                        </InputLabel>
                        <Select
                          labelId="benzodiazepines"
                          value={benzodiazepines}
                          onChange={handleChangeBenzodiazepines}
                        >                          
                          <MenuItem value={"none"}>
                            <FormControlLabel value="none" control={<Radio />} label="None" />
                          </MenuItem>       
                          <MenuItem value={"benzodiazepines"}>
                            <FormControlLabel value="benzodiazepines" control={<Radio />} label="benzodiazepines" />
                          </MenuItem>        
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Date of efficacy assessment
                        </InputLabel>                        
                        <Input
                          id="firstName"
                          type="text"
                          value="2022/1/8"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                      <Box className="custom_selectWithRadio mb-4">
                        <InputLabel htmlFor="firstName">
                          Method of efficacy assessment
                        </InputLabel>
                        <Select
                          labelId="physicianJudgement"
                          value={physicianJudgement}
                          onChange={handleChangePhysicianJudgement}
                        >                          
                          <MenuItem value={"physicianJudgement"}>
                            <FormControlLabel value="physicianJudgement" control={<Radio />} label="physician's judgement" />
                          </MenuItem>       
                          <MenuItem value={"physicianJudgement"}>
                            <FormControlLabel value="physicianJudgement" control={<Radio />} label="physician's judgement" />
                          </MenuItem>        
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Questionnaire scores
                        </InputLabel>                        
                        <Input
                          id="firstName"
                          type="text"
                          value="55"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Card className="p-12 lg:p-24 shadow-none rounded-lg h-full">
                <CardContent>
                  <Box className="custom_fileOne mb-4">
                    <InputLabel htmlFor="firstName">
                    Upload files
                    </InputLabel>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                    >
                      <img src="/icon_upload-01.png"/>
                      <span>Drop your EDF files here</span>
                      <span className="btn">Choose file</span>
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Box>     

                  <Box className="upload_progressBar mb-7">
                    <h6>PDF</h6>
                    <Box className="progress_bar">
                      <Box className="bar">
                        <BorderLinearProgress variant="determinate" value={100} />
                        <span className="progress_status">Completed</span>
                      </Box>
                      <Button
                        sx={{
                          
                        }}
                      >
                        <img src="/icon_trash-01.png"/>
                      </Button>
                    </Box>
                  </Box> 

                  <Box className="text-center">
                    <Button
                      onClick={handleSubmitOpen}
                      className="px-4 py-2.5 text-xl font-medium text-white bg-themeBlue border border-transparent rounded-md hover:bg-themeBlue-200 focus:outline-none"
                    >
                        Submit
                    </Button>
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
              <Box sx={modalStyle} className="p-16 lg:p-24 max-h-[90vh] overflow-y-auto">
                <Box id="modal-modal-title" className="text-center">
                  <h4 className="text-xl font-normal leading-none text-[#4D4D4D]">Welcome to</h4>
                  <h2 className="text-2xl font-normal leading-none text-[#333333] my-5">AI Depression Platform</h2>
                  <p className="bg-themeBlue-500 rounded-3xl px-6 py-2 inline-block">4 Steps Completed</p>
                </Box>
                <Box id="modal-modal-description" sx={{ mt: 8 }} className="font-medium">
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6} lg={3} className="text-center p-5">
                      <img src="/icon_step-01.png" alt="" className="mx-auto" />
                      <h4 className="text-2xl mt-5 mb-3">Step 1</h4>
                      <p>Fill Out The Document For AI Diagnosis.<br/><br/>*Require Submission Of EDF File.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} className="text-center p-5">
                      <img src="/icon_step-02.png" alt="" className="mx-auto" />
                      <h4 className="text-2xl mt-5 mb-3">Step 2</h4>
                      <p>Provide Patient Information.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} className="text-center p-5">
                      <img src="/icon_step-03.png" alt="" className="mx-auto" />
                      <h4 className="text-2xl mt-5 mb-3">Step 3</h4>
                      <p>Upload Records For Future Reference.</p>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} className="text-center p-5">
                      <img src="/icon_step-04.png" alt="" className="mx-auto" />
                      <h4 className="text-2xl mt-5 mb-3">Step 4</h4>
                      <p>Receive Computed Results In Your Email Inbox.</p>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Modal>

            <Modal
              open={submitModal}
              onClose={handleSubmitClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="p-5"
            >
              <Box sx={submitModalStyle} className="px-10 lg:px-20 py-10 lg:py-14 max-h-[90vh] overflow-y-auto">
                <Box id="modal-modal-description" className="font-medium">
                  <Grid container spacing={2.5}>
                    <Grid item xs={12}>
                      <Box className="custom_inputTwo mb-4">
                        <InputLabel htmlFor="firstName">
                          Search Patient 
                        </InputLabel>
                        <Input
                          id="createPassword"
                          type="text"
                          placeholder="Chart number"
                          endAdornment={
                            <InputAdornment position="end">
                              <SearchIcon className="me-3" />
                            </InputAdornment>
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Chart No
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="301024"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Account
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Wang5678"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Hospital
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Taipei Veterans General Hospital"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *ID
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="J22*******"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Gender
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="men"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Birthday
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="19920610"
                        />
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Main-Antidepressants
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Buporin SR 150mg"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Diagnosis
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="MDD"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          *Number of days of medication use
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="1.5"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Box className="custom_inputOne mb-4">
                        <InputLabel htmlFor="firstName">
                          The nth record of the same patient
                        </InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value="Buporin SR 150mg"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box className="custom_selectOne mb-4">
                        <InputLabel htmlFor="firstName">
                          Do you think the treatment outcome for this patient might be poor?
                        </InputLabel>
                        <Select
                          labelId="firstName"
                          value={eegOperatingTime}
                          onChange={handleChangeEegOperatingTime}
                        >
                          <MenuItem value={"Yes"}>
                            Yes
                          </MenuItem>
                          <MenuItem value={"No"}>
                            No
                          </MenuItem>
                        </Select>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Button
                          type="submit"
                          className="w-full px-4 py-2.5 text-xl font-medium text-white bg-themeBlue border border-transparent rounded-md hover:bg-themeBlue-200 focus:outline-none"
                      >
                          Submit
                      </Button>
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
