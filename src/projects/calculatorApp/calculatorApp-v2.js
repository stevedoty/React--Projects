import React, {Component} from 'react';

import './calculatorApp-v2.scss';

class CalculatorV2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: null,
      displayValue: 0,
      clear: 'AC',
      waitingForOperand: false,
      operator: null,
    }
  }

  handleDigit(digit){
    const { displayValue, clear, waitingForOperand } = this.state

    if (waitingForOperand){
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else{
      this.setState({
        clear: 'C',
        displayValue: (displayValue===0  ? String(digit) : displayValue + digit)
      })
    }
  }

  handleDot(dot){
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand){
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      })
    } else if ( displayValue.indexOf('.') === (-1) ){
      this.setState({
        displayValue: displayValue + '.',
        // waitingForOperand: false
      })
    }
  }

  clearDisplay(key){
    const { displayValue, clear } = this.state

    this.setState({
      clear: 'AC',
      displayValue: 0
    })
  }

  toggleSign(sign){
    const { displayValue } = this.state

    this.setState({
      displayValue: displayValue * (-1)
    })
  }

  findPercentage(percentage){
    const { displayValue } = this.state
    const value = parseFloat( displayValue )

    this.setState({
      displayValue: String( value / 100 )
    })
  }

  handleOperator(nextOperator){
    const { displayValue, operator, value } = this.state;

    const next = parseFloat(displayValue);

    const operations = {
      '/': ( previous, next ) => previous / next,
      '*': ( previous, next ) => previous * next,
      '-': ( previous, next ) => previous - next,
      '+': ( previous, next ) => previous + next,
      '=': ( previous, next ) => next
    }
    console.log('value: ',value)
    if (value === null){
      this.setState({
        value: next
      })
    } else if (operator) {
      const previous = value || 0;
      const computedValue = operations[operator](previous, next);

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

  render() {
    const { displayValue, clear } = this.state

    return(
      <div className="calculator-container">
        <div className="calculator-display">{displayValue}</div>
        <div className="calulator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear" onClick={() => this.clearDisplay('AC')}>{clear}</button>
              <button className="calculator-key key-sign" onClick={() => this.toggleSign('+/-')}>+/-</button>
              <button className="calculator-key key-percent" onClick={() => this.findPercentage('%')}>%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-9" onClick={() => this.handleDigit(9)}>9</button>
              <button className="calculator-key key-8" onClick={() => this.handleDigit(8)}>8</button>
              <button className="calculator-key key-7" onClick={() => this.handleDigit(7)}>7</button>
              <button className="calculator-key key-6" onClick={() => this.handleDigit(6)}>6</button>
              <button className="calculator-key key-5" onClick={() => this.handleDigit(5)}>5</button>
              <button className="calculator-key key-4" onClick={() => this.handleDigit(4)}>4</button>
              <button className="calculator-key key-3" onClick={() => this.handleDigit(3)}>3</button>
              <button className="calculator-key key-2" onClick={() => this.handleDigit(2)}>2</button>
              <button className="calculator-key key-1" onClick={() => this.handleDigit(1)}>1</button>
              <button className="calculator-key key-0" onClick={() => this.handleDigit(0)}>0</button>
              <button className="calculator-key key-dot" onClick={() => this.handleDot('.')}>.</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" onClick={() => this.handleOperator('/')}>/</button>
            <button className="calculator-key key-multiply" onClick={() => this.handleOperator('*')}>*</button>
            <button className="calculator-key key-subtract" onClick={() => this.handleOperator('-')}>-</button>
            <button className="calculator-key key-add" onClick={() => this.handleOperator('+')}>+</button>
            <button className="calculator-key key-equals" onClick={() => this.handleOperator('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorV2;
