'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Appbar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2';
import { useState, useEffect } from 'react';

function Page() {
const [count, setCount] = useState(0);

const addCookie = () => {
  setCount(count + 1); // Increase the cookie count by 1
};

const rmCookie = () => {
  setCount(count - 1); // Decrease the cookie count by 1
}

useEffect(() => {
  console.log("The count is now:", count);
}, [count]); // Run this effect every time cookieCount changes
  return (
    <>
      <Container>
        <Appbar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, width:100}}>
              Practice 
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Appbar>
      </Container>
      <Grid2 display="flex" sx={{justifyContent: 'center'}}>
      <Button variant="contained" sx={{mt:5}}
      onClick={addCookie}>{count}</Button>
      <Button variant="contained" sx={{mt:10}} onClick={rmCookie}>Less</Button>
      </Grid2>
    </>
  );
}

export default Page;