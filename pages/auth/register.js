import React, { useState } from 'react';
import {
  Container, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem,
  RadioGroup, FormControlLabel, Radio, Typography, Box, Input, InputAdornment, IconButton,
  Modal   
} from '@mui/material';
import Link from 'next/link';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Padding } from '@mui/icons-material';

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    birthday: '',
    account: '',
    confirmAccount: '',
    createPassword: '',
    confirmPassword: '',
    gender: '',
    email: '',
    jobTitle: '',
    workLocation: '',
    specialty: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    width: "100%",
    maxWidth: "744px",
    bgcolor: '#ffffff',
    border: '0px solid #000',
    borderRadius: "10px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    <>


      <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3] px-5 py-12">

        <div className="w-full max-w-[1047px] p-28 bg-white rounded-[10px]">

            <h4 className="text-xl font-normal leading-none text-center text-[#4D4D4D]">Welcome to</h4>
            <h1 className="text-2xl font-normal leading-none text-center text-[#333333] my-5">AI Depression Platform</h1>
            <p className="text-base font-normal leading-none text-center text-[#4D4D4D]">Please Login your account.</p>

            <form className="mt-7">
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="firstName">
                      *First Name
                    </InputLabel>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="lastName">
                      *Last Name
                    </InputLabel>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="nationality">
                      *Nationality
                    </InputLabel>
                    <Input
                      id="nationality"
                      type="text"
                      placeholder="Nationality"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="birthday">
                      *Birthday
                    </InputLabel>
                    <Input
                      id="birthday"
                      type="text"
                      placeholder="Birthday"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="account">
                      *Account ( At least 8 characters )
                    </InputLabel>
                    <Input
                      id="account"
                      type="text"
                      placeholder="Account"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="account">
                      *Confirm Account
                    </InputLabel>
                    <Input
                      id="account"
                      type="text"
                      placeholder="Confirm Account"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="createPassword">
                      *Create Password
                    </InputLabel>
                    <Input
                      id="createPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="confirmPassword">
                      *Confirm Password
                    </InputLabel>
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} lg={4} xl={2}>
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

                <Grid item xs={12} sm={12} lg={8} xl={10}>
                  <Box className="custom_inputOne mb-6">
                    <InputLabel htmlFor="email">
                      Email
                    </InputLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Test123@gmail.com"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} lg={4}>
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

                <Grid item xs={12} sm={12} lg={4}>
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

                <Grid item xs={12} sm={12} lg={4}>
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

                <Grid item xs={12} sm={12} lg={4}>
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

              </Grid>

                <Box className="mt-24">
                    <button
                        type="submit"
                        className="w-full px-4 py-2.5 text-xl font-medium text-white bg-themeBlue border border-transparent rounded-md hover:bg-themeBlue-200 focus:outline-none"
                    >
                        Create Account
                    </button>
                </Box>
            </form>

            <Button onClick={handleOpen}>Open modal</Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle} className="p-16 xl:p-36 max-h-[90vh] overflow-y-auto">
                <Typography id="modal-modal-title" className="text-center">
                  <img src="/icon_check-01.png" alt="" className="mx-auto" />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 8 }} className="font-medium">
                  Thank you for submitting your application for physician registration. We are pleased to inform you that your application has been successfully received and is currently under review by our team.
                  <br/><br/>
                  Our staff will carefully verify the information and documents you have provided. This process may take some time, and we appreciate your patience.
                  <br/><br/>
                  Please keep an eye on your email for further updates and any additional requests for information we may have.
                  <br/><br/>
                  Thank you for your cooperation.
                  <br/><br/>
                  Best regards,
                  <br/><br/>
                  AI Depression Platform
                  <br/><br/><br/><br/>
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 text-xl font-medium text-white bg-[#585858] border border-transparent rounded-md hover:bg-[#363636] focus:outline-none"
                  >
                    Your Application Has Been Received
                  </button>
                </Typography>
              </Box>
            </Modal>

        </div>
      </div>


    <Container maxWidth="sm" className="hidden">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to AI Depression Platform
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Please Login your account.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
          *First name
        </InputLabel>
            <TextField
              name="firstName"
              label="First name"
              variant="outlined"
              fullWidth
              required
              value={formValues.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
          *Last name
        </InputLabel>
            <TextField
              name="lastName"
              label="Last name"
              variant="outlined"
              fullWidth
              required
              value={formValues.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
          *Nationality
        </InputLabel>
            <TextField
              name="nationality"
              label="Nationality"
              variant="outlined"
              fullWidth
              required
              value={formValues.nationality}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
          Birthday
        </InputLabel>
            <TextField
              name="birthday"
              label="Birthday"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              required
              value={formValues.birthday}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
         * Account (At least 8 characters)
        </InputLabel>
            <TextField
              name="account"
              label="Account (At least 8 characters)"
              variant="outlined"
              fullWidth
              required
              value={formValues.account}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
         * Confirm Account
        </InputLabel>
            <TextField
              name="confirmAccount"
              label="Confirm Account"
              variant="outlined"
              fullWidth
              required
              value={formValues.confirmAccount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
         * Create Password
        </InputLabel>
            <TextField
              name="createPassword"
              label="Create Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={formValues.createPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <InputLabel  htmlFor="bootstrap-input">
         * Confirm Password
        </InputLabel>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth required>
            <InputLabel  htmlFor="bootstrap-input">
         * Gender
        </InputLabel>
              <RadioGroup
                row
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
              >
                <FormControlLabel value="man" control={<Radio />} label="Man" />
                <FormControlLabel value="woman" control={<Radio />} label="Woman" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <InputLabel  htmlFor="bootstrap-input">
         * Email
        </InputLabel>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Job Title</InputLabel>
              <Select
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
                label="Job Title"
              >
                <MenuItem value="Physician">Physician</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Work Location</InputLabel>
              <Select
                name="workLocation"
                value={formValues.workLocation}
                onChange={handleChange}
                label="Work Location"
              >
                <MenuItem value="Hospital">Hospital</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Specialty</InputLabel>
              <Select
                name="specialty"
                value={formValues.specialty}
                onChange={handleChange}
                label="Specialty"
              >
                <MenuItem value="General Psychiatry">General Psychiatry</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Years of Experience</InputLabel>
              <Select
                name="experience"
                value={formValues.experience}
                onChange={handleChange}
                label="Years of Experience"
              >
                <MenuItem value="Less than 5 years">Less than 5 years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>

    </>

  );
};

export default Register;
