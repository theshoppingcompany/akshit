import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Customequestions = () => {
  return (
    <>
      <div
        className=" mx-7 p-7 flex flex-col "
      >
        <span className="  text-3xl font-bold my-3">Custom Questions</span>
        <span>
          Run ad-hoc queries on your data or use this space to explore schema
        </span>
        <br />
        <span className=" font-semibold text-1xl"> Enter query </span>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 3, width: '60ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue=""
          />
        </Box>
        <Button sx={{ m: 3, width: '20ch' }} variant="contained">
          Run Query
        </Button>
      </div>
    </>
  );
};

export default Customequestions;
