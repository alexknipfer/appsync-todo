import * as React from 'react'
import { v4 as uuid } from 'uuid'
import { WrappedProps, Todo } from './types'

class Todos extends React.Component<WrappedProps> {
    componentWillMount() {
        this.props.subscribeToNewTodos()
    }

    createTodo = async() => {
        const { createTodo } = this.props

        const todoId = uuid()

        const todoName = document.getElementById('todoName') as HTMLInputElement
        const todoDescription = document.getElementById('todoDescription') as HTMLInputElement

        await createTodo(todoId, todoName.value, todoDescription.value)
    }

    render() {
        const { loading, allTodos } = this.props

        if (loading) {
            return <h3>Loading...</h3>
        }
        
        return (
            <div>
                <input type="text" id="todoName" placeholder="Todo Name" />
                <input type="text" id="todoDescription" placeholder="Todo Description" />

                <button onClick={this.createTodo}>Add Todo</button>

                {allTodos && 
                    allTodos.map((todo: Todo) => 
                        <div key={todo.todoId}>{todo.name}</div>
                    )
                }
            </div>
        )
    }
}

export default Todos