import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './layouts/base/Base';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

ReactDOM.render(
    //<Base><Done /></Base>, document.getElementById('root')
    <Base><ToDo /></Base>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
