import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {decorate, observable, computed} from 'mobx'
import {observer} from 'mobx-react';

class Todo {
    id = Math.random()
    title = ''
    finished = false
}
decorate(Todo, {
    title: observable,
    finished: observable
})

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
}
class TodoListView extends  Component{
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                <TodoView todo={todo} key={todo.id}/>
                )}
            </ul>
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
const store = new TodoList()
ReactDOM.render(<TodoListView todoList={store}/>, document.getElementById(''))