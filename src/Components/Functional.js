import React, { Component } from "react";
import Task from "./Task";

class Functional extends Component {
  constructor() {
    super();
    this.state = {
      editId: null, //id of the task we're editing
      name: "",
      deadline: "",
    };
  }

  editTask = ({ name, deadline, id }) =>
    this.setState({ name, deadline, editId: id });
  deletingTask = (id) => this.props.removeTask(id);
  newTask = () => {
    const { newTask } = this.props;
    const { name, deadline } = this.state;
    newTask({ name, deadline });
    this.resetState();
  };
  updateTask = () => {
    const { updateTask, task } = this.props;
    const { name, deadline, editId: id } = this.state;
    updateTask({ id, name, deadline });
    if (id != null) {
      this.resetState();
    }
  };

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });
  resetState = () => this.setState({ editId: null, name: "", deadline: "" });

  render() {
    const { editId, name, deadline } = this.state;
    console.log(this.props);

    return (
      <div>
        {this.props.taskList.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              editTask={this.editTask}
              deletingTask={this.deletingTask}
            />
          );
        })}
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
        {editId != null ? (
          <>
            <button onClick={this.updateTask}>update my task</button>
            <button onClick={this.resetState}>cancel</button>
          </>
        ) : (
          <button onClick={this.newTask}>No Going Back Now</button>
        )}
      </div>
    );
  }
}
export default Functional;
