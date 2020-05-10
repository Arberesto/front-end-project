import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store/store';
import Base from './layouts/base/Base';
import Done from "./pages/done/Done";
import ToDo from "./pages/todo/ToDo";
import SignIn from "./pages/signin/SignIn";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/signin' render={() => (
                    <PlainLayout>
                        <Route path='/signin' component={SignIn}/>
                    </PlainLayout>
                )}/>
                <Route path="/" render={() => (
                    <Base>
                        <Route exact path="/" component={ToDo}/>
                        <Route exact path="/todo" component={ToDo}/>
                        <Route exact path="/done" component={Done}/>
                    </Base>
                )}/>
                <Redirect to={'/'}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
