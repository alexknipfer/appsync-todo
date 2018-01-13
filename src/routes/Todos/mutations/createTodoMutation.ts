import gql from 'graphql-tag'

export default gql`
    mutation($todoId: ID!, $name: String!, $description: String!, $dateCreated: String!) {
        createTodo(todoId: $todoId, name: $name, description: $description, dateCreated: $dateCreated) {
            todoId
            name
            description
            dateCreated
        }
    }
`