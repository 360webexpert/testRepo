import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const forgot = () => {
  return (

    <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3] px-5 py-12">
      <div className="w-full max-w-3xl p-28 bg-white rounded-[10px]">

          <h1 className="text-2xl font-normal leading-none text-center text-[#333333] mb-7">AI Depression Platform</h1>
          <p className="text-base font-normal leading-8 text-[#4D4D4D]">Enter the email address associated with your account and we'll send you a link to reset your password.</p>

          <form className="mt-7">
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
              <Box className="mb-6">
                  <button
                      type="submit"
                      className="w-full px-4 py-2.5 text-xl font-medium text-white bg-themeBlue border border-transparent rounded-md hover:bg-themeBlue-200 focus:outline-none"
                  >
                      Continue
                  </button>
              </Box>
          </form>

          <div className="text-base text-center text-[#666666]">
              New member here?{' '}
              <Link href="/auth/register" className="font-semibold text-themeBlue hover:underline">
                  Register Now
              </Link>                    
          </div>
      </div>
    </div>

  )
}

export default forgot