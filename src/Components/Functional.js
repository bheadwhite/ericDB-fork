import React, { Component } from "react";

class Functional extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      name: "",
      deadline: "",
    };
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleChange() {}
  handleSave() {}

  listOfTasks = (e) => {
    this.props.currentTask(e.target.value);
  };

  addingTask = (e) => {
    this.props.getTask(e.target.value);
  };

  saveTask = () => {
    const { saveTask, task } = this.props;
    const { name, deadline, isEditing } = this.state;
    saveTask({ id: task.id, name, deadline });
    if (isEditing) {
      this.resetState();
    }
  };
  editTask = () => {
    const { name, deadline } = this.props.task;
    this.toggleEdit();
    this.setState({ name, deadline });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetState = () => {
    this.setState({ isEditing: false, name: "", deadline: "" });
  };

  deletingTask = (e) => {
    this.props.removeTask(e.target.value);
  };

  render() {
    const {
      task: { name: taskName, deadline: taskDeadline },
    } = this.props;
    const { isEditing, name, deadline } = this.state;
    return (
      <div>
        {taskName + " " + "needs to be done by" + " " + taskDeadline}{" "}
        <button onClick={this.editTask}>Wife Changed Her Mind</button>
        <button>Job Well Done</button>
        <h4>Add New Task</h4>
        <input
          placeholder="Your wifes new demand"
          name="name"
          value={name}
          onChange={this.handleInput}
        />
        <input
          placeholder="Complete date/time"
          name="deadline"
          value={deadline}
          onChange={this.handleInput}
        />
        {isEditing ? (
          <>
            <button onClick={this.saveTask}>update my task</button>
            <button onClick={this.resetState}>cancel</button>
          </>
        ) : (
          <button>No Going Back Now</button>
        )}
      </div>
    );
  }
}
export default Functional;
