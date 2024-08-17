import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import FilterBar from './FilterBar';
import SortBar from './SortBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: ''
  });
  const [sort, setSort] = useState('price');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products`, {
          params: {
            ...filters,
            sort
          }
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getProducts();
  }, [filters, sort]);

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <SortBar sort={sort} setSort={setSort} />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.productId}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.productName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.company} | {product.category} | {product.price} | {product.rating} | {product.discount} | {product.availability}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
