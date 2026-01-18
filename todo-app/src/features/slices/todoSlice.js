import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name : 'todos',
    initialState: {
        list : []
    },
    reducers: {
    todoAdd: {
      reducer(state, action) {
         state.list.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
  },
});

export const { todoAdd } = todoSlice.actions;

export default todoSlice.reducer;