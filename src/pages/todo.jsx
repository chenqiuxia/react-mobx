import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import NewTodo from 'components/newTodo'

@inject('todoList')
// class Todo {
//     id = Math.random()
//     title = ''
//     finished = false
// }
// decorate(Todo, {
//     title: observable,
//     finished: observable
// })

// class TodoList {
//     @observable todos = [];
//     @computed get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length
//     }
// }
@observer
class TodoListView extends  Component{
    // onToggleCompleted () {
    //     console.log('this')
    //     const todo = this.props.todoList
    //     todo.finished = !todo.finished
    // }
    render() {
        return <div>
            <ul>
                <p>{this.props.todoList.text}</p>
                <p>{this.props.todoList.id}</p>
                {this.props.todoList.todos.map((todo,index) =>
                <TodoView todo={todo} key={index} />
                )}
            </ul>
            <NewTodo/>
        </div>
    }
}
const TodoView = observer(({todo}) =>
    <li>
        <input
            type='checkbox'
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)
export default TodoListView;