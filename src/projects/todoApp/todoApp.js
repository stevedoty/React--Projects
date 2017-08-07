import React, { Component } from 'react';
import List from './components/List.js';
import Header from './components/Header.js';

import './todoApp.scss';

/*
TodoListApp structure

App
  Header
    new item---add
  List
    item---done-delete
    item---done-delete
  List
    item---done-delete
    item---done-delete
*/

class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayValue: '',
      todos: [
                    {'name':'c++', 'id': Math.round(Math.random()*5675765765675), 'done': false},
                    {'name':'java', 'id': Math.round(Math.random()*5675765765675), 'done': false},
                    {'name':'sql', 'id': Math.round(Math.random()*5675765765675), 'done': false},
                    {'name':'css', 'id': Math.round(Math.random()*5675765765675), 'done': true},
                    {'name':'html', 'id': Math.round(Math.random()*5675765765675), 'done': true},
                    {'name':'react', 'id': Math.round(Math.random()*5675765765675), 'done': true},
                    {'name':'javascript', 'id': Math.round(Math.random()*5675765765675), 'done': true},
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
