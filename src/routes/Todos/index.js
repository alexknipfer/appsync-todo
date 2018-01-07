import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import uuidv4 from 'uuid/v4'

import TodosQuery from './queries/getTodosQuery'
import CreateTodoMutation from './mutations/createTodoMutation'

class Todos extends Component {
    createTodo = async () => {
        const { createTodo } = this.props

        const todoId = uuidv4()
        const todoName = document.getElementById('todoName').value
        const todoDescription = document.getElementById('todoDescription').value

        await createTodo(todoId, todoName, todoDescription)
    }

    render() {
        const { loading, todos } = this.props

        if (loading) return <h3>Loading...</h3>

        return (
            <div>
                <h3>Todos</h3>

                <input type='text' placeholder='Todo Name' id='todoName' />
                <input type='text' placeholder='Todo Description' id='todoDescription' />

                <button onClick={() => this.createTodo()}>Create Todo</button>

                {todos.map((todo) => {
                    return <div key={todo.todoId}>{todo.name}</div>
                })}
            </div>
        )
    }
}

export default compose(
    graphql(TodosQuery, {
        props: ({ data: { loading, getTodos }}) => ({
          loading,
          todos: getTodos
        })
    }),

    graphql(CreateTodoMutation, {
        props: ({ mutate }) => ({
            createTodo: (todoId, name, description) => {
                return mutate({
                    variables: {
                        todoId,
                        name,
                        description
                    }
                })
            }
        }),
        options: {
            refetchQueries: [{ query: TodosQuery }],
        }
    })
)(Todos)