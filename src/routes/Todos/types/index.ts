import { QueryProps } from 'react-apollo'

export type Todo = {
    todoId: string
    name: string
    description: string
    dateCreated: string
}

export type QueryResponse = {
    allTodos: Todo[]
    createTodo: (todoId: string, todoName: string, todoDescription: string, dateCreated: string) => Todo
    subscribeToNewTodos: () => Todo[]
}

export type Previous = {
    allTodos: Todo[]
}

export type WrappedProps = QueryResponse & QueryProps