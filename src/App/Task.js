import React from "react";

export default class Task extends React.Component {
    render() {
        const task = this.props.value;
        return <li>{task.name}</li>
    }
}