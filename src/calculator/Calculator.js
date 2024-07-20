import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appendValue, clearDisplay, calculateResult } from '../store/calculatorSlice';
import classes from "./Calculator.module.css";

const Calculator = () => {
    const dispatch = useDispatch();
    const display = useSelector((state) => state.calculator.display);

    const handleButtonClick = (value) => {
        dispatch(appendValue(value));
    };

    const handleCalculate = () => {
        dispatch(calculateResult());
    };

    const handleClear = () => {
        dispatch(clearDisplay());
    };

    return (
        <div className={classes.all}>
            <div>
                <input type="text" value={display} readOnly />
            </div>
            <div>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
