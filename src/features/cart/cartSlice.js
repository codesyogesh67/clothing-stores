import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/authSlice"



export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
    cartProductQuantity: { value: 1, id: "" },
    products: [],
  },
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
    pushToCart: (state, action) => {
      if (state.cart.length === 0) {
        state.cart.push({ ...action.payload, quantity: 1 });
        return state;
      } else {
        const newItem = state.cart.filter(
          (cartProduct) => cartProduct.id === action.payload.id
        );
        if (newItem.length === 0) {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      }
    },
    updateCart: (state, action) => {
      state.cart = [];
      state.totalAmount = 0;
    },
    updateEachQuantity: (state, action) => {
      const { productId, quantity } = action.payload;

      state.cart.filter((each) => {
        if (each.id === productId) {
          each.quantity = quantity;
        }
        return state;
      });
    },
    updateTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },

    removeItem: (state, action) => {
      const item = state.cart.filter(
        (product) => product.id === action.payload
      );
      if (item === 0) {
        return state;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout, (state, action) => {
        state.cart = [];
        state.totalAmount = 0;
      })
  }

});

export const {
  pushToCart,
  updateEachQuantity,
  removeItem,
  updateTotalAmount,
  updateCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export const selectCartProductQuantity = (state) =>
  state.cart.cartProductQuantity;

export const selectTotalAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer;
