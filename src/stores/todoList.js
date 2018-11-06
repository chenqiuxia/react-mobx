import { observable } from 'mobx';
import {computed} from "mobx/lib/mobx";

const TodoList = observable({
    todos: [],
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
} );

export default TodoList;