import React from "react"
import Users from "./components/users"
import { Route, Switch } from "react-router-dom"
import Main from "./components/main"
import Login from "./components/login"
import UserPage from "./components/userPage"
import NavBar from "./components/navBar"

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" render={(props) => <UserPage {...props} />} />
                <Route
                    path="/users"
                    render={(props) => {
                        return <Users {...props} />
                    }}
                />
                <Route path="/" component={Main} />
            </Switch>
        </>
    )
}

export default App
