import {observer} from "mobx-react/index";
import React, {Component} from 'react';
import { inject} from 'mobx-react';
@inject('todoList')
    @observer
 class NewTodo extends Component{
     constructor (props) {
         super(props)
         this.state = {
             newValue: ' '
         }
     }
     addNew () {
         console.log('新增')
     }
     handleChange (e) {
         // console.log(e.target.value)
         this.props.todoList.addNew(e.target.value)
     }
     render () {
         return <div>
             <input type='text' onChange={this.handleChange}/>
             <p>{this.state.newValue}</p>
             <button onClick={this.addNew}>新增</button>
         </div>
     }
 }
 export default NewTodo