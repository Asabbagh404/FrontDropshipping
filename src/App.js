import React from 'react';
import routesConfig from './route'
import './assets/css/init.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Header from './templates/header';


function App() {
    return (
        <Router>
            <Header/>
            <div>
                <Switch>
                    {routesConfig.map((route, i) => (
                            <GenerateRoute key={i} {...route}/>
                        )
                    )}
                </Switch>
            </div>
        </Router>
    );
}

function GenerateRoute(route) {
    return (

        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes}/>
            )}
        />

    );

}

export default App;
