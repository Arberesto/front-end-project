import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import './index.css';
import Base from './layouts/base/Base';
import Done from "./pages/done/Done";
import Todo from "./pages/todo/ToDo";


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Base>
            <Switch>
                <Route exact path="/todo" render={Todo} />
                <Route exact path="/done" render={Done} />
                <Redirect to={'todo'}/>
            </Switch>

    </Base>
    </BrowserRouter>
    </Provider>,document.getElementById('root')
);
