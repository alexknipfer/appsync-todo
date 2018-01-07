import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Todos from './Todos'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Todos} />
      </Switch>
    </BrowserRouter>
  )
}

export default App