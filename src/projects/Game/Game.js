import React, {Component} from 'react';
import Board from './Components/Board.js';
import Character from './Components/Character.js';

import './Game.scss';


class Game extends Component{
  constructor(props){
    super(props);
    this.state={
      squares:
      [{
        safe:true,
        blocked:false,  
      }]
    }
  }

  render(){
    return(
        <div>
          yo
          <Board />

        </div>
    );
  }
}

export default Game;
