import { useEffect, useState } from 'react';
import { Grid, Button, Container, Box, Typography,Card,CardContent,CardMedia,CardActionArea} from '@mui/material';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EastIcon from '@mui/icons-material/East';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ClampedText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {text}
      </div>
      {!isExpanded && (
        <span onClick={toggleExpanded} style={{color:'#0059BC'}}>
          <em>... devamını gör</em>
        </span>
      )}
      {isExpanded && (
        <div>
          {text}
          <span onClick={toggleExpanded} style={{color:'#0059BC', marginLeft:6, textDecoration:'underline'}}>
            Kapat
          </span>
        </div>
      )}
    </div>
  );
};


const Products = () => {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [favs, setFavs] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const visibleProducts = showMore ? products : products.slice(0, 4);

  const getData = async() =>{
    const {data} = await axios.get('https://honey-badgers-ecommerce.glitch.me/products')
    setProducts(data);
  }

  useEffect(() =>{
    getData();
  },[]);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  const handleButton = () =>{
    setIsClicked(!isClicked);
  }

  const toggleFav = (event,id) =>{
    // Linke yönlendirmeyi engelle
    event.preventDefault();

    const index = favs.findIndex(fav => fav.id === id);

    if (index !== -1) {
      // ID bulundu, elemanı diziden kaldır
      const updatedFavs = [...favs];
      updatedFavs.splice(index, 1);
      setFavs(updatedFavs);
    } else {
      // ID bulunamadı, elemanı diziye ekle
      const newFav = products.find(product => product.id === id);
      if (newFav) {
        setFavs([...favs, newFav]);
      }
    }
  }

  return (
    <Container sx={{p:5}}>
      {/* Heading */}
      <Box sx={{display: 'flex',mb:5, justifyContent:'space-between'}}>
        <Box sx={{marginRight:1}}>
          <Typography variant="h4" color="initial" fontWeight="bold" 
          sx={{fontSize: {
            '@media (max-width:500px)': {
              fontSize: '13px',
            },
              xs: '18px',
              sm: '22px',
              md: '33px',
            },}} >
          Content title goes here
          </Typography>
        </Box>
          {/* Kalp ikonu beğeni sayısı ve buton */}
        <Box>
          <Box sx={{display:'flex', alignItems: 'center'}}>
            {/* Kalp ikonu */}
            <div style={{marginRight:9}}>
              <FavoriteBorderIcon 
                sx={{
                  fontSize: {
                    '@media (max-width:500px)': {
                      fontSize: '16px',
                    },
                    xs: '22px',
                    sm: '25px',
                    md: '28px',
                  },
                }}/>
            </div>
              {/* Favori ürün sayısı */}
            <div style={{marginRight:15}}>
              <Typography variant="subtitle1" color="initial" fontWeight="bold" sx={{fontSize: {
                '@media (max-width:500px)': {
                  fontSize: '11px',
                },
              xs: '13px',
              sm: '15px',
              md: '19px',
            },}}>
                {favs.length} ÜRÜN
              </Typography>
            </div>
             {/* Favoriler / Tüm ürünler butonu */}
            <div>
              <Button  
                sx={{textTransform:'none', fontSize: {
                  '@media (max-width:500px)': {
                    fontSize: '9px',
                  },
                xs: '11px',
                sm: '13px',
                md: '19px',
                }}} 
            variant={isClicked?'outlined':'contained'} color="primary" onClick={handleButton}>
                {isClicked?'Tüm Ürünler':'Beğenilenler'}
              </Button></div>
          </Box>
        </Box>
      </Box>
      
      {/* Web & Tablet Cards */}
      <Box sx={{display:{xs:'none',sm:'block'}}}>
      <Grid container spacing={2}>
        {(isClicked?favs:visibleProducts).map((product,index) => (
          <Grid item xs={12} sm={3} key={index}>
            <Card sx={{ maxWidth: 345, height:'100%' }}>
              <a href="https://google.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardActionArea>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="179"
                    image={product.imageUrl}
                    alt={product.name}
                  />
                  <Box sx={{ position: 'absolute', top: '3%', right: '3%' }} onClick={event=>toggleFav(event,product.id)}>
                    <span role="img" aria-label="heart" style={{ fontSize: '1.5rem', backgroundColor:'white', borderRadius:'50%', display: 'flex', justifyContent: 'center', padding:2 }}>
                    <FavoriteBorderIcon sx={{color: favs.includes(product)? 'red':'#D1D1D1'}}/>
                    </span>
                  </Box>
                </Box>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height:{sm:'270px',md:'270px'} }}>
                  <Typography gutterBottom variant="h6" fontWeight='bold' component="div" color='#00254F'>
                    {product.name}
                    {/* {product.name.length > 30 ? <ClampedText text={product.name} />: product.name} */}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div" color='#00254F' bgcolor='#E6EEF8' sx={{padding: '4px 8px'}}>
                    {product.price} TL
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div" color='#00254F'>
                    Description
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div" color='#00254F' 
                  // sx={{display:{xs:'none',sm:'block',md:'none'}}}
                  >
                    <ClampedText text={product.description} />
                  </Typography>
                  {/* <Typography gutterBottom variant="body1" component="div" color='#00254F' sx={{display:{sm:'none',md:'block'}}}>
                    {product.description}
                  </Typography> */}
                  <Typography variant="body2" color="text.secondary">
                    {product.shippingMethod}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
          </Grid>
        ))}
        {(!showMore && !isClicked) && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: '16px' }}
              onClick={handleLoadMore}
            >
              Daha Fazla
              <EastIcon fontSize='small' style={{marginLeft:8}}/>
            </Button>
          </Grid>
        )}
      </Grid>
      </Box>

      {/* Mobile Card */}
      <Box sx={{display:{sm:'none'}}}>
      <Carousel showStatus={false} showThumbs={false} swipeable emulateTouch infiniteLoop>
      {(isClicked ? favs : products).map((product, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345, height: '100%' }}>
          <Card sx={{ maxWidth: 345, height:'100%' }}>
              <a href="https://google.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardActionArea>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="179"
                    image={product.imageUrl}
                    alt={product.name}
                  />
                  <Box sx={{ position: 'absolute', top: '3%', right: '3%' }} onClick={event=>toggleFav(event,product.id)}>
                    <span role="img" aria-label="heart" style={{ fontSize: '1.5rem', backgroundColor:'white', borderRadius:'50%', display: 'flex', justifyContent: 'center', padding:2 }}>
                    <FavoriteBorderIcon sx={{color: favs.includes(product)? 'red':'#D1D1D1'}}/>
                    </span>
                  </Box>
                </Box>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height:{sm:'270px',md:'270px'} }}>
                  <Typography gutterBottom variant="h6" fontWeight='bold' component="div" color='#00254F'>
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div" color='#00254F' bgcolor='#E6EEF8' sx={{padding: '4px 8px'}}>
                    {product.price} TL
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div" color='#00254F'>
                    Description
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div" color='#00254F'>
                  {/* {product.description} */}
                    <ClampedText text={product.description} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {product.shippingMethod}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card>
          </Card>
        </div>
      ))}
    </Carousel>
    </Box>
    </Container>
  );
};

export default Products;
