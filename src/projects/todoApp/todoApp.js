import React, { Component } from 'react';
import List from './components/List.js';
import Header from './components/Header.js';
import './todoApp.scss';

/*
TodoListApp structure

App
  Header
    new item
  List
    item---done-delete
    item---done-delete
*/


// class Header extends Component{
//   render(){
//     return(
//       <div id='header-container'>
//         <div id='header'>
//           <input id='input' value={this.props.displayValue} onChange={this.props.handleChange} placeholder='add item here...'/>
//           <button id='add' onClick={this.props.addItem}>Add</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// class List extends Component{
//   render(){
//     return(
//       <div id='lists'>
//         <div className='list todo-list'>
//           <h4>Todo</h4>
//           {this.props.items.filter(x=>!x.done).map((item)=>{
//             return(
//               <div className='list-item' key={item.id} id={item.id} done={item.done}>
//                 {item.name}
//                 <button id='delete' onClick={(e)=>this.props.deleteItem(item)}>remove</button>
//                 <button id='check' onClick={(e)=>this.props.markAsDone(item)}>check</button>
//               </div>
//             )
//           })}
//         </div>
//
//         <div className='list done-list'>
//           <h4>Completed</h4>
//           {this.props.items.filter(x=>x.done).map((item)=>{
//             return(
//               <div className='list-item' key={item.id} id={item.id} done={item.done}>
//                 {item.name}
//                 <button id='delete' onClick={(e)=>this.props.deleteItem(item)}>remove</button>
//                 <button id='check' onClick={(e)=>this.props.markAsDone(item)}>check</button>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     );
//   }
// }

class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayValue: '',
      todos: [
                    {'name':'c++', 'id': Math.round(Math.random()*5675765765675), 'done': false},    
                    {'name':'java', 'id': Math.round(Math.random()*5675765765675), 'done': false},
                    {'name':'react', 'id': Math.round(Math.random()*5675765765675), 'done': false},
                  ],
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(item){
    item.preventDefault()
    this.state.todos.unshift({name: this.state.displayValue, id: Math.round(Math.random()*5675765765675), done: false});
    function compare(a,b) {
    if (a.name < b.name){
        return -1;
    } else if (a.name > b.name){
          return 1;
      }
    return 0;
    }

    this.state.todos.sort(compare);
    this.setState({todos: this.state.todos, displayValue: ''})
  }

  handleChange(event){
    this.setState({displayValue: event.target.value})
  }

  markAsDone(clickedItem){
    let clickedItemIndex = this.state.todos.findIndex(item=>(clickedItem.id === item.id));
    let foundItem = this.state.todos[clickedItemIndex];

    if(clickedItemIndex !== -1){
      foundItem.done = !foundItem.done;
      this.setState({todo: this.state.todos})

    }
  }

  deleteItem(item){
    let newTodo = this.state.todos;
      newTodo.splice(newTodo.indexOf(item),1);
      this.setState({todos: newTodo})
  }

  render() {
    return (
      <div className='app'>
          <Header addItem={this.addItem} displayValue={this.state.displayValue} handleChange={this.handleChange}/>
          <List items={this.state.todos} markAsDone={this.markAsDone} deleteItem={this.deleteItem}/>

      </div>
    );
  }
}

export default TodoApp;
