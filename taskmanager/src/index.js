import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './layouts/base/Base';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Done from "./pages/done/Done";
import Todo from "./pages/todo/ToDo";


ReactDOM.render(
    <BrowserRouter>
    <Base>
            <Switch>
                <Route exact path="/" render={Todo} />
                <Route render={Done} />
            </Switch>
    </Base>
    </BrowserRouter>, document.getElementById('root')

);
