import { useState } from 'react';
import {Grid,Box,Tabs,Tab, Menu, MenuItem, tabsClasses, Link  } from '@mui/material';
import categoryImage from '../assets/categoryImage.png';


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
  const [isGridVisible, setGridVisible] = useState(false);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGridVisible = () => {
    setGridVisible(!isGridVisible)
  }


  return (
    <>
    {/* Web Kategoriler */}
    <Box sx={{display: {xs:'none', md:'flex'} , justifyContent: 'center', marginTop:'5px' }}>
        <Tabs sx={{ [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },}} value={value} scrollButtons  variant="scrollable" onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Page One" onClick={handleGridVisible}/>
          <LinkTab label="Page Two" onClick={handleGridVisible} />
          <LinkTab label="Page Three" onClick={handleGridVisible} />
          <LinkTab label="Page Four" onClick={handleGridVisible}/>
          <LinkTab label="Page Five" onClick={handleGridVisible} />
          <LinkTab label="Page Six" onClick={handleGridVisible} />
          <LinkTab label="Page Seven" onClick={handleGridVisible} />
          <LinkTab label="Page Eight" onClick={handleGridVisible} />
          <LinkTab label="Page Nine" onClick={handleGridVisible} />
          <LinkTab label="Page Ten" onClick={handleGridVisible} />
          {/* <LinkTab label="Page Ten" onClick={() => setGridVisible(true)} /> */}
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

    <Box sx={{backgroundColor:'#F4F5F6', p:5, mx:9, display: isGridVisible ? 'grid' : 'none' }}>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Box sx={{display:'flex' }}>
            <Grid item sm={6}>
                <div style={{paddingLeft:'25%'}}>
                  <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: 'darkkhaki' } }}>Header</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{paddingLeft:'25%'}}>
                  <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: 'darkkhaki' } }}>Header</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb:1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }}>Subheader</Link>
                  </Box>
                </div>
            </Grid>
          </Box>
        </Grid>
        <Grid item sm={8}>
          <Box>
            <img src={categoryImage} alt="Image" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Navbar
