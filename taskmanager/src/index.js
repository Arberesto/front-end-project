import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './layouts/base/Base';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Done from "./pages/done/Done";
import Todo from "./pages/todo/ToDo";


ReactDOM.render(
    <BrowserRouter>
    <Base>
            <Switch>
                <Route exact path="/todo" render={Todo} />
                <Route exact path="/done" render={Done} />
                <Redirect to={'todo'}/>
            </Switch>

    </Base>
    </BrowserRouter>, document.getElementById('root')

);
