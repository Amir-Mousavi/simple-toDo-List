import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    taskTitle: ""
  };

  onChangeTitle = e => this.setState({ taskTitle: e.target.value });

  onAddTask = () => {
    const { addTask } = this.props;
    const { taskTitle } = this.state;

    addTask(taskTitle);

    this.setState({ taskTitle: "" });
  };

  render() {
    const { onChangeTitle, onAddTask } = this;
    const { taskTitle } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={onChangeTitle}
        />
        <button disabled={!taskTitle} onClick={onAddTask}>
          Add Task
        </button>
      </div>
    );
  }
}
