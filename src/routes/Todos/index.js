import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import uuidv4 from 'uuid/v4'
import { DefaultButton, TextField } from 'office-ui-fabric-react/lib'
import {
    FocusZone,
    FocusZoneDirection
  } from 'office-ui-fabric-react/lib/FocusZone'
import { List } from 'office-ui-fabric-react/lib/List';
import styled from 'styled-components'

import AllTodosQuery from './queries/allTodosQuery'
import CreateTodoMutation from './mutations/createTodoMutation'
import NewTodoSubscription from './subscriptions/newTodoSubscription'

const AddTodoInputSection = styled.div`
    display: flex;
`

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

                <AddTodoInputSection>
                    <TextField type='text' placeholder='Todo Name' id='todoName' />
                    <TextField type='text' placeholder='Todo Description' id='todoDescription' />
                    <DefaultButton
                        primary={ true }
                        data-automation-id='test'
                        text='Create Todo'
                        onClick={() => this.createTodo()}
                    />
                </AddTodoInputSection>

                {allTodos &&
                    <FocusZone direction={ FocusZoneDirection.vertical }>
                        <List items={allTodos} onRenderCell={this.renderCell} />
                    </FocusZone>
                }
            </div>
        )
    }

    renderCell = (item) => {
        return (
            <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
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