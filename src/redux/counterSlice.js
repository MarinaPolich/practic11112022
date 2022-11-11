import { createAction, createSlice } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const reset = createAction('counter/reset');

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // increment(state, action) {
    //   state.value = state.value + action.payload ?? 1;
    // },
    // decrement(state, action) {
    //   state.value = state.value - action.payload ?? 1;
    // },
    // reset(state, action) {
    //   state.value = 0;
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(increment, (state, action) => {
        state.value = state.value + action.payload ?? 1;
      })
      .addCase(decrement, (state, action) => {
        state.value = state.value - action.payload ?? 1;
      })
      .addCase(reset, state => {
        state.value = 0;
      }),
});

// export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
