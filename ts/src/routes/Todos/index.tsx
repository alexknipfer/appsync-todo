import * as React from 'react'
import AllTodosQuery from '../queries/allTodosQuery'
import { graphql, QueryProps } from 'react-apollo'

type Todo = {
    todoId: string
    name: string
    description: string
}

type Response = {
    allTodos: Todo[]
}

type WrappedProps = Response & QueryProps

class Todos extends React.Component<WrappedProps> {
    render() {
        return <h3>Todos</h3>
    }
}

const withTodos = graphql<Response, WrappedProps>(AllTodosQuery, {
    options: {
        fetchPolicy: 'cache-and-network'
    },
    props: ({ data: { loading, allTodos } }) => ({
        loading,
        allTodos
    })
})

export default withTodos(Todos)