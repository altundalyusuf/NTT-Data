import {  useState } from 'react';
import { AppBar, Box, Toolbar, InputBase, styled, Button, IconButton, MenuItem, FormControl, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {LetterN, LetterT, LetterT1, LetterD, LetterA, LetterT2, LetterA1} from '../assets/Logo';
import { Drawer, List, ListItem, Typography } from '@mui/material';
import { useDispatch} from 'react-redux';
import { setGridInvisible } from '../redux/features/navbar/navbarSlice';


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
  [theme.breakpoints.up('xs')]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: '106px',
    height: '40px',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: theme.shape.borderRadius,
    width: '110px',
    height: '40px',
    // vertical margin + font size from searchIcon
    marginLeft: `calc(1em + ${theme.spacing(1)})`,
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
      width: '160px',
    },
    [theme.breakpoints.up('md')]: {
      width: '180px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '180px',
    },
    '& .MuiInputBase-input': {
      paddingTop: '10px',
      paddingLeft: '20px',
    },
}));


const StyledDiv = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
}));


const Searchbar = () => {

  const [category, setCategory] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

    // Navbar menüsünü kapa
    const dispatch = useDispatch();
    const changeGridInvisible = () => {
      dispatch(setGridInvisible())
    }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, border: 'none', borderBottom: '1px solid gray' }} onClick={changeGridInvisible}>
      <AppBar position="static" color='' sx={{boxShadow: 'none'}}>
        {/* Mobil kısmı */}
      <StyledToolbar2>
        <Box
        sx={{display: {
          xs: 'flex',
        },}}
        >
          <div style={{marginRight:'5px'}}>
            <LetterN/>
            <LetterT/>
            <LetterT1/>
          </div>
          <div>
            <LetterD/>
            <LetterA/>
            <LetterT2/>
            <LetterA1/>
          </div>
        </Box>

          
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
        >
          <MenuIcon/> 
        </IconButton> 
      </StyledToolbar2>
      {/* Mobil ikona tıklayınca kategoriler gelsin */}
      <div>
      <Drawer anchor="right" variant='temporary' open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{ style: { width: '100%', maxWidth: '100vw' } }} >
        <List sx={{width:{xs:'100vh', sm:'100%'}}}>
          {categories.map((category, index) => (
            <ListItem button key={index} onClick={toggleDrawer} sx={{borderBottom: index === categories.length - 1 ? '3px solid #D9D9D9' : 'none', mt: index=== 0?5:''}}>
              <Typography variant="h6" fontWeight='bold' color="initial">{category}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
    
    {/* Tablet ve Bilgisayar */}
        <StyledToolbar>
          {/* Logo */}
          <Box sx={{display: {
                xs: 'none',
                sm: 'flex',
              },
              marginRight: {
                sm: 3, // theme.breakpoints.up('sm')
                md: 3, // theme.breakpoints.up('md')
                lg: 4, // theme.breakpoints.up('lg')
                xl: 4, // theme.breakpoints.up('xl')
              },}}>
          <div style={{marginRight:'5px'}}>
            <LetterN/>
            <LetterT/>
            <LetterT1/>
          </div>
          <div>
            <LetterD/>
            <LetterA/>
            <LetterT2/>
            <LetterA1/>
          </div>
          </Box>

            {/* Search Bar ve kategori select-option */}
          <StyledDiv >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> 
                <StyledForm variant={category == ''?'filled':'outlined'}>
                  <StyledSelect
                    value={category}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem
                      value="">
                      <em>Categories</em>
                    </MenuItem>
                    <MenuItem value={'Data'}>Data</MenuItem>
                    <MenuItem value={'Category Name'}>Category Name</MenuItem>
                    <MenuItem value={'Category Name'}>Category Name</MenuItem>
                    <MenuItem value={'Category Name'}>Category Name</MenuItem>
                    <MenuItem value={'Category Name'}>Category Name</MenuItem>
                  </StyledSelect>
                </StyledForm>
          </StyledDiv>

          {/* Arama butonu */}
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

export default Searchbar;
