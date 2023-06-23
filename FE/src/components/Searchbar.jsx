import {Typography, AppBar, Box, Toolbar, InputBase, styled, Button, IconButton, MenuItem, FormControl, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingLeft: theme.spacing(2),
    boxSizing: 'border-box',
    border: '1px solid gray',  
    height: '40px',
    [theme.breakpoints.up('xs')]: {
      borderRight: 'none',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      width: '200px',
    },
    [theme.breakpoints.up('sm')]: {
      border: '1px solid gray', 
      width: '340px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(1),
      width: '635px',
    },
  },
}));


const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0059BC',
  color: 'white',
  [theme.breakpoints.up('md')]: {
    width: '110px',
    height: '40px',
    // vertical margin + font size from searchIcon
    marginLeft: `calc(1em + ${theme.spacing(1)})`,
  },
  [theme.breakpoints.down('md')]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: '106px',
    height: '40px',
  },
  '&:hover': {
    backgroundColor: '#0059BC',
  },
}));

const StyledToolbar = styled(Toolbar)(({theme})=>({
  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-evenly',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}))

const StyledToolbar2 = styled(Toolbar)(({theme})=>({
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },

}))

const StyledForm = styled(FormControl)(() => ({
  color: 'inherit',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '0',
  right: '0',
  }));

  const StyledSelect = styled(Select)(({ theme }) => ({
      height: '40px',
      [theme.breakpoints.up('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        width: '90px',
      },
      [theme.breakpoints.up('md')]: {
        width: '130px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '180px',
      },
      '& .MuiInputBase-input': {
        paddingTop: '10px',
        paddingLeft: '20px',
      },
    }));

    const StyledMenuItem = styled(MenuItem)(() => ({
      backgroundColor: '#00254F',
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: '#0059BC',
      },
      '&.Mui-selected': {
        backgroundColor: '#0059BC',
        color: 'white',
      },
      '&.Mui-selected:hover': {
        backgroundColor: '#0059BC',
      },
    }));  

  const StyledDiv = styled('div')(() => ({
    display: 'flex',
    position: 'relative',
    }));


const Searchbar = () => {

  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, border: 'none' }}>
      <AppBar position="static" color='' sx={{boxShadow: 'none'}}>
        {/* Mobil kısmı */}
      <StyledToolbar2>
          <Typography
              variant="h5"
              noWrap
              component="div" 
            >
              NTT Data
          </Typography>

          
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon /> 
            </IconButton> 
      </StyledToolbar2>

    {/* Tablet ve Bilgisayar */}
        <StyledToolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
              marginRight: {
                // xs: 2, // theme.breakpoints.up('xs')
                sm: 3, // theme.breakpoints.up('sm')
                md: 3, // theme.breakpoints.up('md')
                lg: 4, // theme.breakpoints.up('lg')
                xl: 4, // theme.breakpoints.up('xl')
              },
            }}  
          >
            NTT Data
          </Typography>

            {/* Search Bar ve kategori select-option */}
          <StyledDiv >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> 
                <StyledForm variant='filled'>
                  <StyledSelect
                    value={category}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <StyledMenuItem value="">
                      <em>Categories</em>
                    </StyledMenuItem>
                    <StyledMenuItem value={10}>Ten</StyledMenuItem>
                    <StyledMenuItem value={20}>Twenty</StyledMenuItem>
                    <StyledMenuItem value={30}>Thirty</StyledMenuItem>
                  </StyledSelect>
                </StyledForm>
              </StyledDiv>

          <StyledButton>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
          </StyledButton>

        </StyledToolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Searchbar
