import * as React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todos from './Todos'

const App: React.SFC<{}> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={Todos} />
        </Switch>
    </BrowserRouter>
)

export default App