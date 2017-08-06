import React, {Component} from 'react';
import '../todoApp.scss';

class List extends Component{
  render(){
    return(
      <div id='lists'>
        <div className='list todo-list'>
          <h4>Todo</h4>
          {this.props.items.filter(x=>!x.done).map((item)=>{
            return(
              <div className='list-item' key={item.id} id={item.id} >
                {item.name}
                <button id='delete' onClick={(e)=>this.props.deleteItem(item)}>remove</button>
                <button id='check' onClick={(e)=>this.props.markAsDone(item)}>check</button>
              </div>
            )
          })}
        </div>

        <div className='list done-list'>
          <h4>Completed</h4>
          {this.props.items.filter(x=>x.done).map((item)=>{
            return(
              <div className='list-item' key={item.id} id={item.id} >
                {item.name}
                <button id='delete' onClick={(e)=>this.props.deleteItem(item)}>remove</button>
                <button id='check' onClick={(e)=>this.props.markAsDone(item)}>check</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default List;
