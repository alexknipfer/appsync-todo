import gql from 'graphql-tag'

export default gql`
    mutation($todoId: ID!, $name: String!, $description: String!) {
        createTodo(todoId: $todoId, name: $name, description: $description) {
            todoId
            name
            description
        }
    }
`