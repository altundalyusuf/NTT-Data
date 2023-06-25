import { useEffect, useState } from 'react';
import { Grid, Button, Container, Box, Typography } from '@mui/material';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([1, 2, 3, 4]);
  const [showMore, setShowMore] = useState(false);
  const [veri, setVeri] = useState(null);

  const getData = async() =>{
    const {data} = await axios.get('https://honey-badgers-ecommerce.glitch.me/products')
    setVeri(data);
  }

  useEffect(() =>{
    getData();
  },[]);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  return (
    <Container sx={{p:5}}>
      <Box sx={{display: 'flex',mb:5, justifyContent:'space-between'}}>
        <Box><Typography variant="h4" color="initial" fontWeight="bold">Content title goes here</Typography></Box>
        <Box><Typography variant="h4" color="initial">End</Typography></Box>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product}>
            <div
              style={{
                padding: '16px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>Ürün {product}</h3>
              <p>Açıklama</p>
            </div>
          </Grid>
        ))}
        {!showMore && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: '16px' }}
              onClick={handleLoadMore}
            >
              Daha Fazla
            </Button>
          </Grid>
        )}
        {showMore && (
          Array.from({ length: 8 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index + products.length}>
              <div
                style={{
                  padding: '16px',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <h3>Ürün {index + products.length + 1}</h3>
                <p>Açıklama</p>
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Products;
