import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../routes/Home";
import Detail from "../routes/Detail";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/:id" exact>
                    <Detail />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
