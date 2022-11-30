import React, { useState } from "react";
import { FormControl, TextField, Button, Box, MenuItem, Select, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NeonStyle, PageLogin,ToastContainerStyle } from '../assest/StyleComponent';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import logo from '../assest/images/logo.png';

export default function Login() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(1);
  const navigat = useNavigate()

  //chek validation form----------
  const validation = (user) => {
    if (!user.name)
      return "نام خود را وارد کنید";
    return null
  }

  const submite = () => {
    const err = validation({ name, gender })
    if (err)
      return toast.error(err)
    navigat('/chatRoom', { state: { name, gender } })
  }

  return (
    <PageLogin>
      <NeonStyle>نوین چت</NeonStyle>
      <Box component="form">
        <Box textAlign="center">
          <img src={logo} alt="img chatRoom" />
        </Box>
        <Typography>نام کاربری </Typography>
        <TextField value={name} onChange={e => setName(e.target.value)} />
        <Typography>جنسیت: </Typography>
        <FormControl fullWidth>
          <Select value={gender} onChange={e => setGender(e.target.value)}>
            <MenuItem value={1} >دختر</MenuItem>
            <MenuItem value={2}>پسر</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={submite} variant="contained" sx={{ mt: 2 }}>ورود</Button>
      </Box>
      <ToastContainerStyle />
    </PageLogin>
  )
}
