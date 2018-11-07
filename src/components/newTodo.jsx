import React, {Component} from 'react';
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
         console.log(e.target.value)
         this.setState({
             newValue: e.target.value
         })
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