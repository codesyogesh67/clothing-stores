import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productInfo: [],
    drawer: false,
    categoryLinks: []

  },
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
    updateCategoryLinks: (state, action) => {
      state.categoryLinks = action.payload;
    },
    updateProductInfo: (state, action) => {
      state.productInfo = action.payload;
    },
    updateDrawer: (state, action) => {
      state.drawer = action.payload
    },

  },
});

export const {
  updateProducts,
  updateProductInfo,
  updateCategoryLinks,
  updateDrawer
} = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectDrawer = (state) => state.products.drawer;

export const selectCategoryLinks = (state) => state.products.categoryLinks;
export const selectProductInfo = (state) => state.products.productInfo;

export default productsSlice.reducer;
