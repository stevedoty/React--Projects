import React, {Component} from 'react';

import '../todoApp.scss';
import {Add} from 'material-ui-icons';


class Header extends Component{
  render(){
    return(
      <form onSubmit={this.props.addItem}>
        <div id='header-container'>
          <div id='header'>
            <input id='input' value={this.props.displayValue} onChange={this.props.handleChange} placeholder='add item here...'/>
            <button id='add' onClick={this.props.addItem}><Add id='add-icon'/></button>
          </div>
        </div>
      </form>
    );
  }
}

export default Header;
