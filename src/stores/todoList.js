import { observable ,computed, action} from 'mobx';

const TodoList = observable({
    id: Math.ceil(Math.random() * 100),
    todos: [{
        title: 'what',
        finished: false
    }],
    text: 'this is todoList page',
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    },
    @action addNew (title) {
        this.title.push({
            title: title,
            finished: false
        })
    }
} );

export default TodoList;