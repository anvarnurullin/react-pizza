import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://628eb6cb0e69410599cf9ea1.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );

    return data;
  }
);
