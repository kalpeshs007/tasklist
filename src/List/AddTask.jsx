import React, { Component } from 'react';
import uid from 'uid'

class AddTask extends Component {
    state = {
        task: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: this.state.task,
            id: uid()
        }
        this.props.onAddHandleDashboard(newTask);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label style={{ marginLeft: '10px' }} htmlFor="task">Task</label>
                    <input style={{ marginLeft: '10px' }} type="text" name="task" value={this.state.task} onChange={this.onChange} />
                    <input style={{ marginLeft: '10px' }} type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddTask
