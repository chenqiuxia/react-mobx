import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 引入移动的适配器（根据屏幕宽度来设置html的sont-size基准值）
import  'utils/adapter';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {decorate, observable, computed} from 'mobx'
// import {observer, inject} from 'mobx-react';
// import NewTodo from 'components/newTodo'
//
// @inject( 'todoList' )
// class Todo {
//     constructor (title) {
//         this.id = Math.random()
//         this.title = title
//         this.finished = false
//     }
// }
// decorate(Todo, {
//     title: observable,
//     finished: observable
// })
// @observer
// class TodoListView extends  Component{
//     render() {
//         return <div>
//             <ul>
//                 {this.props.todoList.todos.map(todo =>
//                     <TodoView todo={todo} key={todo.id}/>
//                 )}
//             </ul>
//             <NewTodo/>
//             Tasks left: {this.props.todoList.unfinishedTodoCount}
//         </div>
//     }
// }
// const TodoView = observer(({todo}) =>
//     <li>
//         <input
//             type='checkbox'
//             checked={todo.finished}
//             onChange={() => todo.finished = !todo.finished}
//         />{todo.title}
//     </li>
// )
// // class TodoList {
// //     @observable todos = [];
// //     @computed get unfinishedTodoCount() {
// //         return this.todos.filter(todo => !todo.finished).length
// //     }
// // }
// // const store = new TodoList()
// // store.todos.push(
// //     new Todo("Get Coffee"),
// //     new Todo("Write simpler code")
// // );
// // store.todos[0].finished = true;
// ReactDOM.render(<TodoListView todoList={todoList}/>, document.getElementById('root'))