import React, {Component} from 'react';

import './calculatorApp-v2.scss';

class CalculatorV2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayValue:0,
      operandSelected: false,
      operand: null,
      previousValue: null
    }
  }

  handleOnClick(key){
    const { displayValue } = this.state
    if (key=='AC'){this.setState(
      {displayValue:0}
    )}
    else if (key=='%'){this.setState(
      {displayValue:((displayValue)/100)}
    )}
    else if (key=='+/-'){this.setState(
      {displayValue: (displayValue * (-1))}
    )}
    else {this.setState(
      {displayValue: String((displayValue + key)*1)}
    )}
  }

  handleDot(key){
    const { displayValue } = this.state

    if( (key==='.') && (displayValue.indexOf('.') === (-1)) ){
        this.setState( {displayValue: (displayValue + '.') } )
    }
  }

  handleOperand(operator){
    const { displayValue, operandSelected, previousValue, operand } = this.state

    this.setState({operandSelected: true, operand: operator, previousValue: displayValue, displayValue: 0});
  }

  handleEquals(key){
    const { displayValue, operandSelected, previousValue, operand } = this.state

    if( (key==='=') && (operandSelected: true) ){
        this.setState(
          { displayValue: eval(previousValue + operand + displayValue),
            operandSelected: false,
            operand: null,
            previousValue: displayValue })
    }
  }

  render() {
    return(
      <div className="calculator-container">
        <div className="calculator-display">{this.state.displayValue}</div>
        <div className="calulator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear" onClick={() => this.handleOnClick('AC')}>AC</button>
              <button className="calculator-key key-sign" onClick={() => this.handleOnClick('+/-')}>+/-</button>
              <button className="calculator-key key-percent" onClick={() => this.handleOnClick('%')}>%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-9" onClick={() => this.handleOnClick(9)}>9</button>
              <button className="calculator-key key-8" onClick={() => this.handleOnClick(8)}>8</button>
              <button className="calculator-key key-7" onClick={() => this.handleOnClick(7)}>7</button>
              <button className="calculator-key key-6" onClick={() => this.handleOnClick(6)}>6</button>
              <button className="calculator-key key-5" onClick={() => this.handleOnClick(5)}>5</button>
              <button className="calculator-key key-4" onClick={() => this.handleOnClick(4)}>4</button>
              <button className="calculator-key key-3" onClick={() => this.handleOnClick(3)}>3</button>
              <button className="calculator-key key-2" onClick={() => this.handleOnClick(2)}>2</button>
              <button className="calculator-key key-1" onClick={() => this.handleOnClick(1)}>1</button>
              <button className="calculator-key key-0" onClick={() => this.handleOnClick(0)}>0</button>
              <button className="calculator-key key-dot" onClick={() => this.handleDot('.')}>.</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" onClick={() => this.handleOperand('/')}>/</button>
            <button className="calculator-key key-multiply" onClick={() => this.handleOperand('*')}>*</button>
            <button className="calculator-key key-subtract" onClick={() => this.handleOperand('-')}>-</button>
            <button className="calculator-key key-add" onClick={() => this.handleOperand('+')}>+</button>
            <button className="calculator-key key-equals" onClick={() => this.handleEquals('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorV2;
