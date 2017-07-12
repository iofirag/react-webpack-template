import React from 'react';
import {render} from 'react-dom';

const TaskItem = (props) => (
    <li>{props.text}</li>
);

class TaskList extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [{text: 'Do Something'}]
        };

        this.createTask = this.createTask.bind(this);
    }

    createTask() {
        let tasks = this.state.tasks;

        tasks.push({text: "Do Anything"});

        this.setState({
            tasks: tasks
        });
    }

    render() {
        let tasks = this.state.tasks.map((task, i) => (
            <TaskItem key={i} text={task.text}/>
        ));

        return (
            <div>
                <ul>
                    {tasks}
                </ul>

                <button onClick={this.createTask}>Add task</button>
            </div>
        );
    };
}

render(<TaskList />, document.getElementById('app'));