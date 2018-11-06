import React, {Component} from 'react';
// import {decorate, observable, computed} from 'mobx'
// import {observer} from 'mobx-react';

 class NewTodo extends Component{
     render () {
         return <div>
             <input type='text'/>
             <button>新增</button>
         </div>
     }
 }
 export default NewTodo