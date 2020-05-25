import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Functional from "./Components/Functional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTasks: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/task")
      .then((res) => {
        this.setState({
          currentTasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  newTask = ({ name, deadline }) => {
    axios
      .post("/api/task", { name, deadline })
      .then((res) => {
        this.setState({
          currentTasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateTask = ({ id, name, deadline }) => {
    axios
      .put(`/api/task/${id}`, { name, deadline })
      .then((res) => {
        this.setState({
          currentTasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removeTask = (id) => {
    axios
      .delete(`/api/task/${id}`)
      .then((res) => {
        this.setState({
          currentTasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { currentTasks } = this.state;

    return (
      <div className="App">
        <Header />
        <Functional
          taskList={this.state.currentTasks}
          newTask={this.newTask}
          updateTask={this.updateTask}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
