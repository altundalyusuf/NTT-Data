import { useState } from 'react';
import { Grid, Box, Tabs, Tab, Menu, MenuItem, tabsClasses, Link } from '@mui/material';
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
  const [value, setValue] = useState(null);
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

  const changeGridVisible = () => {
    setGridVisible(true)
  }
  const changeGridInvisible = () => {
    setGridVisible(false)
  }

  const handleReload = (event) => {
    event.preventDefault();
  };


  return (
    <>
      {/* Web Kategoriler */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginTop: '5px' }}>
        <Tabs sx={{
          // [`& .${tabsClasses.scrollButtons}`]: {
          //   '&.Mui-disabled': { opacity: 0.3 },
          // },
        }} value={value} scrollButtons variant="scrollable" onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Page One" onClick={changeGridVisible} />
          <LinkTab label="Page Two" onClick={changeGridVisible} />
          <LinkTab label="Page Three" onClick={changeGridVisible} />
          <LinkTab label="Page Four" onClick={changeGridVisible} />
          <LinkTab label="Page Five" onClick={changeGridVisible} />
          <LinkTab label="Page Six" onClick={changeGridVisible} />
          <LinkTab label="Page Seven" onClick={changeGridVisible} />
          <LinkTab label="Page Eight" onClick={changeGridVisible} />
          <LinkTab label="Page Nine" onClick={changeGridVisible} />
          <LinkTab label="Page Ten" onClick={changeGridVisible} />
          {/* <LinkTab label="Page Ten" onClick={() => setGridVisible(true)} /> */}
        </Tabs>
      </Box>

      {/* Tablet Kategoriler */}
      <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, marginTop: '5px' }}>
        <Box sx={{ marginTop: '5px' }}>
          <Tabs centered value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Page One" href="/" />
            <LinkTab label="Page Two" href="/" />
            <LinkTab label="Page Three" href="/" />
            <LinkTab label="Open Dropdown" onClick={handleClick} />
          </Tabs>
        </Box>
        <div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem sx={{
              backgroundColor: 'lightgray'
            }} onClick={handleClose}>Option 1</MenuItem>
            <MenuItem sx={{
              backgroundColor: 'lightgray'
            }} onClick={handleClose}>Option 2</MenuItem>
            <MenuItem sx={{
              backgroundColor: 'lightgray'
            }} onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </div>
      </Box>

      {/* Kategori detayları */}
      <Box sx={{ backgroundColor: '#F4F5F6', p: 5, mx: 9, display: { xs: 'none', md: isGridVisible ? 'grid' : 'none' } }} onClick={changeGridInvisible}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Box sx={{ display: 'flex' }}>
              <Grid item sm={6}>
                <div style={{ paddingLeft: '25%' }}>
                  <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: 'darkkhaki' } }} onClick={handleReload} >Header</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div style={{ paddingLeft: '25%' }}>
                  <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: 'darkkhaki' } }} onClick={handleReload}>Header</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
                  </Box>
                  <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                    <Link href="/" underline="none" color="inherit" sx={{ '&:hover': { color: '#0059BC' } }} onClick={handleReload}>Subheader</Link>
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
