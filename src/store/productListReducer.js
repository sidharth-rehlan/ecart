import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProductList = createAsyncThunk(
    'productList/fetchProductList',
async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const productList = await response.json();
  return productList
})


// Then, handle actions in your reducers:
const productsSlice = createSlice({
    name: 'productList',
    initialState: { entities: [], loading: 'idle' },
    reducers: {},
    extraReducers: {
      // Add reducers for additional action types here, and handle loading state as needed
      [fetchProductList.fulfilled]: (state, action) => {
        // Add user to the state array
        state.entities = action.payload;
      },
      [fetchProductList.rejected]: (state, action) => {
        // Add user to the state array
        state.entities = [];
      }
    }
  })
  
  // Later, dispatch the thunk as needed in the app
  export default productsSlice.reducer;
  

