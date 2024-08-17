import React from 'react';
import { Grid, Typography, ButtonGroup, Button } from '@material-ui/core';

const FilterBar = ({ filters, setFilters }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h6" component="h2">
          Filters
        </Typography>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button onClick={() => setFilters({ ...filters, category: 'Phone' })}>
            Phone
          </Button>
          <Button onClick={() => setFilters({ ...filters, category: 'Computer' })}>
            Computer
          </Button>
          <Button onClick={() => setFilters({ ...filters, category: 'TV' })}>
            TV
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button onClick={() => setFilters({ ...filters, company: 'AMZ' })}>
            AMZ
          </Button>
          <Button onClick={() => setFilters({ ...filters, company: 'FLP' })}>
            FLP
          </Button>
          <Button onClick={() => setFilters({ ...filters, company: 'SNP' })}>
            SNP
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button onClick={() => setFilters({ ...filters, rating: '4' })}>
            4+
          </Button>
          <Button onClick={() => setFilters({ ...filters, rating: '3' })}>
            3+
          </Button>
          <Button onClick={() => setFilters({ ...filters, rating: '2' })}>
            2+
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button onClick={() => setFilters({ ...filters, priceRange: '100-200' })}>
)
}