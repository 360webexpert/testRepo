// login.js
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
import { useRouter } from 'next/router';

const Login = () => {
const router =useRouter()


    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3] px-5 py-12">


                <div className="w-full max-w-3xl p-28 bg-white rounded-[10px]">

                    <h4 className="text-xl font-normal leading-none text-center text-[#4D4D4D]">Welcome to</h4>
                    <h1 className="text-2xl font-normal leading-none text-center text-[#333333] my-5">AI Depression Platform</h1>
                    <p className="text-base font-normal leading-none text-center text-[#4D4D4D]">Please login to your account.</p>

                    <form className="mt-8">

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
                        <Box className="custom_inputOne mb-2">
                            <InputLabel htmlFor="password">
                            Password
                            </InputLabel>
                            <Input
                                id="password"
                                type="password"
                                placeholder="*********"
                            />
                        </Box>

                        <Box className="flex items-center justify-between mb-5">
                            <div className="flex items-center">
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                            </div>

                            <div className="text-sm">
                                <Link href="/auth/forgot">
                                    <div className="font-medium text-themeBlue hover:underline">
                                        Forgot your password?
                                    </div>
                                </Link>
                            </div>
                        </Box>

                        <Box className="mb-6">
                            <button
                                type="button"
                                onClick={()=>router.push('/dashboard')}
                                className="w-full px-4 py-2.5 text-xl font-medium text-white bg-themeBlue border border-transparent rounded-md hover:bg-themeBlue-200 focus:outline-none"
                            >
                                Log in
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
        </div>
    );
};

export default Login;
