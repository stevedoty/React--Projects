import React, {Component} from 'react';
import '../todoApp.scss';

class Header extends Component{
  render(){
    return(
      <div id='header-container'>
        <div id='header'>
          <input id='input' value={this.props.displayValue} onChange={this.props.handleChange} placeholder='add item here...'/>
          <button id='add' onClick={this.props.addItem}>Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
