import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        display: '',
        result: 0,
    },
    reducers: {
        appendValue: (state, action) => {
            state.display += action.payload;
        },
        clearDisplay: (state) => {
            state.display = '';
        },
        calculateResult: (state) => {
            try {
                state.result = eval(state.display);
                state.display = state.result.toString();
            } catch (error) {
                state.display = "ошибка";
            }
        },
    },
});

export const { appendValue, clearDisplay, calculateResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;
