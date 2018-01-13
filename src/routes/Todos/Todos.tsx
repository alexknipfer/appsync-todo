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
                            <List.Item>
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