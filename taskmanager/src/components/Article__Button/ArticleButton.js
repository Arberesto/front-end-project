import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './style.css';

export default class ArticleButton extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Button onClick={this.handleOnClickCheckbox}
                        className={`article__icon${this.props.className ? ` ${this.props.className}` : ''}`}/>
            </React.Fragment>
        );
    };
};

Button.propTypes = {
    onClick:PropTypes.node.isRequired,
    className:PropTypes.string
};
