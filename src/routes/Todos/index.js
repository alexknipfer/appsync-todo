import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import uuidv4 from 'uuid/v4'

import AllTodosQuery from './queries/allTodosQuery'
import CreateTodoMutation from './mutations/createTodoMutation'
import NewTodoSubscription from './subscriptions/newTodoSubscription'

class Todos extends Component {
    componentWillMount() {
        this.props.subscribeToNewTodos()
    }

    createTodo = async () => {
        const { createTodo } = this.props

        const todoId = uuidv4()
        const todoName = document.getElementById('todoName').value
        const todoDescription = document.getElementById('todoDescription').value

        await createTodo(todoId, todoName, todoDescription)
    }

    render() {
        const { loading, allTodos } = this.props

        if (loading) return <h3>Loading...</h3>

        return (
            <div>
                <h3>Todos</h3>

                <input type='text' placeholder='Todo Name' id='todoName' />
                <input type='text' placeholder='Todo Description' id='todoDescription' />

                <button onClick={() => this.createTodo()}>Create Todo</button>

                {allTodos && allTodos.map((todo) => {
                    return <div key={todo.todoId}>{todo.name}</div>
                })}
            </div>
        )
    }
}

export default compose(
    graphql(AllTodosQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: ({ data: { loading, allTodos, subscribeToMore }}) => ({
            allTodos,
            loading,
            subscribeToNewTodos: params => {
                subscribeToMore({
                    document: NewTodoSubscription,
                    updateQuery: (prev, { subscriptionData: { data: { newTodo } }}) => ({
                        ...prev,
                        allTodos: [newTodo, ...prev.allTodos.filter(todo => todo.todoId !== newTodo.todoId)]
                    })
                })
            }
        }),
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
        })
    })
)(Todos)