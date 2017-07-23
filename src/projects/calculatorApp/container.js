import React, { Component } from 'react';
import './calculatorApp.scss';


class Calculator extends Component {


  render() {
    return (
      <div className="Calculator-container">


        <div className="Calculator-display-container">
            <input className="Calculator-display"></input>
        </div>


        <ul className="Calculator-keypad">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>


      </div>
    );
  }
}

let buttons = [
    {
      "name":"0",
      "id":0
    },
    {
      "name":"1",
      "id":1
    },{
      "name":"2",
      "id":2
    },{
      "name":"3",
      "id":3
    },{
      "name":"4",
      "id":4
    },{
      "name":"5",
      "id":5
    },{
      "name":"6",
      "id":6
    },{
      "name":"7",
      "id":7
    },{
      "name":"8",
      "id":8
    },{
      "name":"9",
      "id":9
    },{
      "name":"=",
      "id":10
    },{
      "name":"+",
      "id":11
    },{
      "name":"-",
      "id":12
    },{
      "name":"*",
      "id":13
    },{
      "name":"/",
      "id":14
    },
];


export default Calculator;
