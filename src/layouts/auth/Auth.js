import React from 'react';
import PropTypes from 'prop-types';
import MountainFooter from "./footer/Footer";


export default class Plain extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    {this.props.children}
                </main>
                <MountainFooter/>
            </React.Fragment>
        );
    }
}

Plain.propTypes = {
    children: PropTypes.node.isRequired
};