import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Functional from "./Components/Functional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTask: [],
    };
  }

  componentDidMount() {
    axios.get("/api/task").then((res) => {
      this.setState({
        currentTask: res.data,
      });
    });
  }

  getTask = (name, deadline) => {
    const body = { name, deadline };
    axios.post("/api/task", body).then((res) => {
      this.setState({
        currentTask: res.data,
      });
    });
  };

  saveTask = (id, name, deadline) => {
    const body = { name, deadline };

    axios.put(`/api/task/${id}`, body).then((res) => {
      this.setState({
        currentTask: res.data,
      });
    });
  };

  removeTask = (id) => {
    axios.delete(`/api/task/${id}`).then((res) => {
      this.setState({
        currentTask: res.data,
      });
    });
  };

  render() {
    const { currentTask } = this.state;

    return (
      <div className="App">
        <Header />
        {currentTask.map((e) => (
          <Functional
            key={e.id}
            id={e.id}
            name={e.name}
            deadline={e.deadline}
            currentTask={this.state.currentTask}
            getTask={this.getTask}
            saveTask={this.saveTask}
            removeTask={this.removeTask}
          />
        ))}
      </div>
    );
  }
}

export default App;
