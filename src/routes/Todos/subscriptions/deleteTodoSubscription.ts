import gql from 'graphql-tag'

export default gql`
    subscription deletedTodo {
        deletedTodo {
            todoId
            name
            description
            dateCreated
        }
    }
`