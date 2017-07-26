import React, {Component} from 'react';

import './calculatorApp-v2.scss';

class CalculatorV2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      'displayValue':'0'
    }
  }




handleOnClick(key){
  if (key=='AC'){this.setState({'displayValue':0})}
  else if (key=='%'){this.setState({'displayValue':((this.state.displayValue)/100)})}
  else if (key=='+/-'){this.setState({'displayValue':(this.state.displayValue * (-1))})}
  else if (key=='9'){this.setState({'displayValue':((this.state.displayValue + '9')*1)})}
  else if (key=='8'){this.setState({'displayValue':((this.state.displayValue + '8')*1)})}
  else if (key=='7'){this.setState({'displayValue':((this.state.displayValue + '7')*1)})}
  else if (key=='6'){this.setState({'displayValue':((this.state.displayValue + '6')*1)})}
  else if (key=='5'){this.setState({'displayValue':((this.state.displayValue + '5')*1)})}
  else if (key=='4'){this.setState({'displayValue':((this.state.displayValue + '4')*1)})}
  else if (key=='3'){this.setState({'displayValue':((this.state.displayValue + '3')*1)})}
  else if (key=='2'){this.setState({'displayValue':((this.state.displayValue + '2')*1)})}
  else if (key=='1'){this.setState({'displayValue':((this.state.displayValue + '1')*1)})}
  else if (key=='0'){this.setState({'displayValue':((this.state.displayValue + '0')*1)})}
  else if (key=='.'){this.setState({'displayValue':(this.state.displayValue + '.')})}
  else if (key=='/'){this.setState({'displayValue':this.state.displayValue})}
  else if (key=='*'){this.setState({'displayValue':'*'})}
  else if (key=='-'){this.setState({'displayValue':'-'})}
  else if (key=='+'){this.setState({'displayValue':'+'})}
  else if (key=='='){this.setState({'displayValue':'='})}
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
              <button className="calculator-key key-dot" onClick={() => this.handleOnClick('.')}>.</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide" onClick={() => this.handleOnClick('/')}>/</button>
            <button className="calculator-key key-multiply" onClick={() => this.handleOnClick('*')}>*</button>
            <button className="calculator-key key-subtract" onClick={() => this.handleOnClick('-')}>-</button>
            <button className="calculator-key key-add" onClick={() => this.handleOnClick('+')}>+</button>
            <button className="calculator-key key-equals" onClick={() => this.handleOnClick('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorV2;
