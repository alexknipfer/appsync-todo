import gql from 'graphql-tag'

export default gql`
    mutation($todoId: ID!) {
        deleteTodo(todoId: $todoId) {
            todoId
            name
            description
            dateCreated
        }
    }
`