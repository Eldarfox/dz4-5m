import React from 'react';
import Calculator from './calculator/Calculator';
import classes from "./calculator/Calculator.module.css";

const App = () => {
  return (
      <div className={classes.app}>
        <Calculator />
      </div>
  );
};

export default App;


