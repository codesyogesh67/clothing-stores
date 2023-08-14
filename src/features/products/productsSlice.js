import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productInfo: [],
    drawer: false,
    categoryLinks: [],
    categorySelected: "",
    categories: []

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
    updateCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    updateCategoriesData: (state, action) => {
      state.categories = action.payload
    }

  },
});

export const {
  updateProducts,
  updateProductInfo,
  updateCategoryLinks,
  updateDrawer,
  updateCategorySelected,
  updateCategoriesData
} = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectDrawer = (state) => state.products.drawer;

export const selectCategoryLinks = (state) => state.products.categoryLinks;
export const selectCategory = (state) => state.products.categories;
export const selectProductInfo = (state) => state.products.productInfo;
export const selectCategorySelected = (state) => state.products.categorySelected;

export default productsSlice.reducer;
