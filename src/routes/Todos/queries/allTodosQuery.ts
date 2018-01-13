import gql from 'graphql-tag'

export default gql`
    query allTodos {
        allTodos {
            todoId
            name
            description
            dateCreated
        }
    }
`