import {Typography, AppBar, Box, Toolbar, InputBase, styled, Button, IconButton, MenuItem, FormControl, Select, TextField, Autocomplete } from '@mui/material';
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
    [theme.breakpoints.up('xs')]: {
      borderRight: 'none',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      width: '200px',
      height: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      border: '1px solid gray', 
      width: '340px',
      height: '40px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: '500px',
      height: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(1),
      width: '635px',
      height: '40px',
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


const Searchbar = () => {

  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1, border: 'none' }}>
      <AppBar position="static" color='primary' sx={{boxShadow: 'none'}}>
        {/* Mobil kısmı */}
      <StyledToolbar2>
          <Typography
              variant="h6"
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
            variant="h6"
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


            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> 
              {/* <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={category}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Button sx={{backgroundColor: 'red'}}>
              safsf
            </Button> */}



    {/* <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          size="small"
          sx={{
            width: '100%',
            maxWidth: '300px',
          }}
        />
      )}
    /> */}
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
