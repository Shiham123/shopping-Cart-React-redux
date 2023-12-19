import { createSlice } from '@reduxjs/toolkit';

const interfaceSlice = createSlice({
  name: 'interface',
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

const interfaceActions = interfaceSlice.actions;

export { interfaceActions, interfaceSlice };
