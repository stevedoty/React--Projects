import React, {Component} from 'react';

import '../todoApp.scss';
import {Done, Delete} from 'material-ui-icons';

class List extends Component{
  render(){
    return(
      <div id='lists'>
        <div className='list todo-list'>
          <h4>Todo</h4>
          {this.props.items.filter(x=>!x.done).map((item)=>{
            return(
              <div className='list-item' key={item.id} id={item.id} >
                <p>{item.name}</p>
                <button id='delete' onClick={(e)=>this.props.deleteItem(item)}><Delete id='delete-icon'/></button>
                <button id='check' onClick={(e)=>this.props.markAsDone(item)}><Done id='done-icon'/></button>
              </div>
            )
          })}
        </div>

        <div className='list done-list'>
          <h4>Completed</h4>
          {this.props.items.filter(x=>x.done).map((item)=>{
            return(
              <div className='list-item' key={item.id} id={item.id} >
                <p>{item.name}</p>
                <button id='delete' onClick={(e)=>this.props.deleteItem(item)}><Delete id='delete-icon'/></button>
                <button id='check' onClick={(e)=>this.props.markAsDone(item)}><Done id='delete-icon'/></button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default List;
