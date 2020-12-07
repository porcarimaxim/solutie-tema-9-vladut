import React from "react";
import Task from "./Task";


export default class Tasklist extends React.Component {
    render() {
        const tasklist = this.props.data
        return <li>
            {tasklist.name}
            <ol>
                {
                    tasklist.tasks.map( 
                        task => <Task key={task.id} value={task} />
                    )
                }
            </ol>
        </li>
    }
}