import React, {Component} from 'react';
import {Android} from 'material-ui-icons';

import '../Game.scss';


class Character extends Component{
  constructor(props){
    super(props);


  }


  render(){
    return(
        <div>
          <Android />
        </div>
    );
  }
}

export default Character;
