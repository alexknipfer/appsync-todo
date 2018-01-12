import Todos from './Todos'
import AllTodosQuery from './queries/allTodosQuery'
import CreateTodoMutation from './mutations/createTodoMutation'
import NewTodoSubscription from './subscriptions/newTodoSubscription'
import { compose, graphql } from 'react-apollo'
import { QueryResponse, WrappedProps, Previous } from './types'

const withTodos = graphql<QueryResponse, WrappedProps>(AllTodosQuery, {
    options: {
        fetchPolicy: 'cache-and-network'
    },
    props: ({ data }) => data ? ({
        loading: data.loading,
        allTodos: data.allTodos,
        subscribeToNewTodos: params => {
            data.subscribeToMore({
                document: NewTodoSubscription,
                updateQuery: (prev: Previous, { subscriptionData: { data: { newTodo } }}) => ({
                    ...prev,
                    allTodos: [newTodo, ...prev.allTodos.filter(todo => todo.todoId !== newTodo.todoId)]
                })
            })
        }
    }) : {}
})

const withCreateTodoMutation = graphql(CreateTodoMutation, {
    props: ({ mutate }) => ({
        createTodo: (todoId: string, name: string, description: string) => {
            return mutate ? mutate({
                variables: {
                    todoId,
                    name,
                    description
                }
            }) : {}
        }
    })
})

export default compose(withTodos, withCreateTodoMutation)(Todos)