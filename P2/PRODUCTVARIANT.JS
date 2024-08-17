import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const ProductSpotlight = ({ product }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
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
    </Grid>
  );
}