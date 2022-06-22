import React from 'react'
import {Route, Switch} from "react-router-dom"
import {Home} from "./pages/Home/Home"
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics"

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/month-statistics" exact component={MonthStatistics} />
            </Switch>
        </div>
    )
}

export default App
