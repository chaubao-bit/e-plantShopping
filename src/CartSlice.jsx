Here is the completed `CartSlice.jsx` file with the implemented reducers for adding items, removing items, and updating their quantities.

### `CartSlice.jsx`

```javascript
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from the action payload
      // Check if the item already exists in the cart by comparing names
      const existingItem = state.items.find((item) => item.name === name);
      
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity++;
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove an item from the cart based on its name
      // Note: This expects action.payload to be the name of the item
      state.items = state.items.filter((item) => item.name !== action.payload);
      
      // If you are passing the whole item object instead of just the name in CartItem.jsx, 
      // change the line above to: item.name !== action.payload.name
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
      
      // Find the item in the cart that matches the given name
      const itemToUpdate = state.items.find((item) => item.name === name);
      
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
      }
    },
  },
});

// Export the action creators to use in ProductList.jsx and CartItem.jsx
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default to use in store.js
export default CartSlice.reducer;

```
