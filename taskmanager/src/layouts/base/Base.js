import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';

import './style.css';

class Base extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className='main'>
                    <SideBar className='main__side-bar'/>
                    <section className='main__content'>
                        <div className='main__task-list'>
                        {this.props.children}
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    };
}

export default withRouter(Base);

Base.propTypes = {
    children:PropTypes.node.isRequired
};