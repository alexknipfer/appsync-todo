import React, { Component } from 'react';
import TodosQuery from './getTodosQuery'
import { graphql } from 'react-apollo'

class App extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

export default graphql(TodosQuery, {
  props: ({ data: { loading, getTodos }}) => ({
    loading,
    todos: getTodos
  })
})(App)
