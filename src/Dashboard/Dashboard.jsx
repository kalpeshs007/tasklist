import React, { Component } from 'react';
import AddTask from '../List/AddTask'
import List from '../List/List';

class Dashboard extends Component {
    state = {
        tasks: [
            { task: 'Learn Javascript', id: 1 },
            { task: 'Learn React', id: 2 },
            { task: 'Learn ReactNative', id: 3 }
        ]
    }
    // onClear(done) {
    //     this.setState({
    //         tasks: []
    //     })
    //     console.log(done);
    // }

    onClear = (done) => {
        return () => {
            this.setState({
                tasks: []
            })
            console.log(done);
        }
    }

    onDeleteHandleDashboard = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => (
                task.id !== id
            ))
        })
    }

    onAddHandleDashboard = (task) => {
        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <AddTask onAddHandleDashboard={this.onAddHandleDashboard} />
                <List tasks={tasks} onDeleteHandleDashboard={this.onDeleteHandleDashboard} />
                <button onClick={this.onClear('clear')}>Clear All</button>
            </div>
        )
    }
}

export default Dashboard