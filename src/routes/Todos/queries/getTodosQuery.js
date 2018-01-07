import gql from 'graphql-tag'

export default gql`
    query getTodos {
        getTodos {
            todoId
            name
            description
        }
    }
`