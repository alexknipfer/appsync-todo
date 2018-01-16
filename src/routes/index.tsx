import * as React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todos from './Todos'
import Register from './Register'

const App: React.SFC<{}> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={Todos} />
            <Route exact={true} path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)

export default App