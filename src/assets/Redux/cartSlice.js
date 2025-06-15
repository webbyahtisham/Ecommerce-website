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
      const newItem = {
        ...action.payload,
        quantity: action.payload.quantity ?? 1,
        selectedSize: action.payload.selectedSize ?? 'Default',
      };

      const existing = state.cartItems.find(
        item => item.id === newItem.id && item.selectedSize === newItem.selectedSize
      );

      if (existing) {
        existing.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
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

// Shows number of different unique products (id + size)
export const selectCartCount = (state) => state.cart.cartItems.length;

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
