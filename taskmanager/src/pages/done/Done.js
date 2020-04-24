import React from 'react';
import {connect} from 'react-redux';
import Task from "../../components/task/Task";
import list from './list';
import './style.css';
import SortButton from "../../components/sort-order-button/SortButton";


class Done extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
            text: ''
        }
    }

    componentDidMount() {
        this.setState({
            tasksList: list.data
        });
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
        ;
    };

    changeOrder = (event) => {
        alert("Order reversed");
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                text: '',
                tasksList: [{id: "some-id", text: this.state.text}, ...this.state.tasksList]
            },
            () => {
                list.data = this.state.tasksList;
            }
        );
    };

    renderList = (tasksList) => {
        return tasksList.map((item, index) => {
            return (
                <Task
                    className='content_box'
                    key={index}
                    taskId={item.id}
                    text={item.text}
                    status={'done'}
                />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className={'done-page'}>
                    <div className='main__content-header'>
                        <SortButton onClick={this.changeOrder} value="Sort by done date"/>
                    </div>
                {this.renderList(this.state.tasksList)}
                </div>
            </React.Fragment>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);