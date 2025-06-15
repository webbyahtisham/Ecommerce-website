import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  deliveryFee: 15,
  discount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      // Match by id + selectedSize
      const existing = state.cartItems.find(
        item => item.id === newItem.id && item.selectedSize === newItem.selectedSize
      );

      if (existing) {
        existing.quantity += newItem.quantity;
      } else {
        state.cartItems.push({ ...newItem });
      }
    },

    removeFromCart: (state, action) => {
      // Remove by id + size (pass {id, selectedSize} as payload)
      state.cartItems = state.cartItems.filter(
        item => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
      );
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      );
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            i => !(i.id === item.id && i.selectedSize === item.selectedSize)
          );
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Example: could be used to sum total items (not just array length)
export const selectCartCount = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
