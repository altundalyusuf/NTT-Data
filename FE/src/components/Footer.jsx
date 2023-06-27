import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import {LetterN, LetterT, LetterT1, LetterD, LetterA, LetterT2, LetterA1} from '../assets/FooterLogo';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const handleReload = (event) => {
        event.preventDefault();
      };
  return (
    <>
    <Box color='white' sx={{backgroundColor:'#0059BC'}}>
        <Box sx={{ py:7, px:12}}>
            <Grid container spacing={2}>
                <Grid item sm={6} sx={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    {/* NTT Data Logo */}
                    <Box sx={{mb:{xs:'3rem' ,sm:'1rem'}}}>
                        <Box sx={{display: {xs: 'flex',}}}>
                        <div style={{marginRight:'6px'}}>
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
                        <Typography variant="caption">Trusted Global Innovator</Typography>
                    </Box>
                    {/* Paragraf */}
                    <Box sx={{display:{xs:'none',sm:'block'} ,width:{sm:'100%',md:'50%'}, mb:'3rem'}}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptas nam.</p>
                    </Box>
                    {/* Email Kayıt Input */}
                    <Box display="flex" alignItems="center" position='relative' sx={{width:{sm:'100%',md:'50%'}}} >
                        <TextField
                            label="Email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                            style: {
                                backgroundColor: 'white',
                                flex: '1',
                                borderRadius: '0',
                            },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                            bgcolor: '#00254F',
                            height: '100%',
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            borderRadius: '0',
                            '&:hover':{
                                bgcolor: 'coral',
                            }
                            }}
                        >
                            Signup
                        </Button>
                    </Box>
                </Grid>

                <Grid item sm={6}>
                    <Box color='white' sx={{ pt:5 }}>
                        {/* Web */}
                        <Box sx={{display:{xs:'none',md:'flex'}}}>
                            <Grid item sm={4}>
                            <div style={{ paddingLeft: '25%' }}>
                                <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                                <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                            </div>
                            </Grid>
                            <Grid item sm={4}>
                            <div style={{ paddingLeft: '25%' }}>
                                <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                                <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                            </div>
                            </Grid>
                            <Grid item sm={4}>
                            <div style={{ paddingLeft: '25%' }}>
                                <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                                <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                                <Box sx={{ typography: 'subtitle1', pb: 1 }}>
                                <Link href="/" underline="none" color="inherit" onClick={handleReload}>Subheader</Link>
                                </Box>
                            </div>
                            </Grid>
                        </Box>
                        {/* Tablet */}
                        <Grid item sx={{display:{xs:'none',sm:'grid',md:'none'}}} sm={12}>
                        <div style={{ paddingLeft: '25%' }}>
                            <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                            <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                            </Box>
                            <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                            <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                            </Box>
                            <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                            <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                            </Box>
                            <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                            <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                            </Box>
                            <Box sx={{ typography: 'subtitle1', fontWeight: 'bold', pb: 1 }} >
                            <Link href="/" underline="none" color="inherit" onClick={handleReload} >Title</Link>
                            </Box>
                        </div>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>      
        </Box>
        <Grid item color='white' sm={12} sx={{ borderTop:'1px solid', py:3, px:{xs:3, sm:12}, display:'flex', justifyContent:'space-between'}}>
           <Box>
                <Typography variant="subtitle1">contact@nttdata.com</Typography>
           </Box>
           <Box>
            <Typography variant="subtitle1">+3 9876 765 444</Typography>
           </Box>
           <Box sx={{display:{xs:'none', sm:'block'}}}>
            <InstagramIcon sx={{mr:3}}/>
            <FacebookIcon sx={{mr:3}}/>
            <LinkedInIcon/>
           </Box>
        </Grid>
    </Box>
    </>
  )
}

export default Footer
