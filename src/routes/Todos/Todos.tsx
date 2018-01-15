import * as React from 'react'
import { v4 as uuid } from 'uuid'
import { WrappedProps, Todo } from './types'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Loader from '../../components/Loader/Loader'
import { Button, Input, List } from 'antd'
import styled from 'styled-components'

const InputSection = styled.div`
    display: flex;
    justify-content: space-around;
    input { width: 40%; }
`

class Todos extends React.Component<WrappedProps> {
    componentWillMount() {
        this.props.subscribeToTodos()
    }

    createTodo = async () => {
        const { createTodo } = this.props

        const todoId = uuid()
        const todoName = document.getElementById('todoName') as HTMLInputElement
        const todoDescription = document.getElementById('todoDescription') as HTMLInputElement
        const dateCreated = new Date().toISOString()

        await createTodo(todoId, todoName.value, todoDescription.value, dateCreated)
    }

    deleteTodo = async (todoId: string) => {
        const { deleteTodo } = this.props

        await deleteTodo(todoId)
    }

    render() {
        const { allTodos, loading } = this.props

        if (loading) {
            return <Loader />
        }

        return (
            <DefaultLayout>
                <InputSection>
                    <Input type="text" id="todoName" placeholder="Todo Name" />
                    <Input type="text" id="todoDescription" placeholder="Todo Description" />
                    <Button type="primary" onClick={this.createTodo}>Add Todo</Button>
                </InputSection>

                {allTodos &&
                    <List
                        itemLayout="horizontal"
                        dataSource={allTodos}
                        renderItem={(todo: Todo) => (
                            <List.Item
                                actions={[<a key={todo.todoId} onClick={() => this.deleteTodo(todo.todoId)}>Delete</a>]}
                            >
                                <List.Item.Meta
                                    title={todo.name}
                                    description={todo.description}
                                />
                            </List.Item>
                        )}
                    />
                }
            </DefaultLayout>
        )
    }
}

export default Todos