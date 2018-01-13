import gql from 'graphql-tag'

export default gql`
    subscription newTodo {
        newTodo {
            todoId
            name
            description
            dateCreated
        }
    }
`