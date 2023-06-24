import { useState } from 'react';
import {Box,Tabs,Tab, Menu, MenuItem, tabsClasses  } from '@mui/material';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
    {/* Web Kategoriler */}
    <Box sx={{display: {xs:'none', md:'flex'} , justifyContent: 'center', marginTop:'5px' }}>
        <Tabs sx={{ [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },}} value={value} scrollButtons  variant="scrollable" onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Page One" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
          <LinkTab label="Page Four" href="/spam" />
          <LinkTab label="Page Five" href="/spam" />
          <LinkTab label="Page Six" href="/spam" />
          <LinkTab label="Page Seven" href="/spam" />
          <LinkTab label="Page Eight" href="/spam" />
          <LinkTab label="Page Nine" href="/spam" />
          <LinkTab label="Page Ten" href="/spam" />
        </Tabs>
    </Box>

    {/* Tablet Kategoriler */}
    <Box sx={{display: {xs:'none',sm:'block',md:'none'} , marginTop:'5px'}}>
      <Box sx={{  marginTop:'5px' }}>
        <Tabs centered value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Page One" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/trash" />
          <LinkTab label="Open Dropdown" onClick={handleClick} />
        </Tabs>
      </Box>
      <div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
      </div>
    </Box>

    <Box sx={{backgroundColor:'#F4F5F6', p:5}}>
      Lorem ipsum dolor sit amet conse
    </Box>
    </>
  )
}

export default Navbar
