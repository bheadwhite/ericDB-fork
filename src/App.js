import React, { Component } from "react"
import "./App.css"
import axios from "axios"
import Header from "./Components/Header"
import Functional from "./Components/Functional"
import { Route, Switch } from "react-router-dom"
import { AddTask, TaskList, Landing } from "./views"

class TaskApp extends Component {
  constructor() {
    super()
    this.state = {
      deleted: false,
    }
  }

  removeTask = (id) => {
    axios
      .delete(`/api/task/${id}`)
      .then((res) => {
        this.setState({
          deleted: true,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  newTask = ({ name, deadline }) => {
    axios
      .post("/api/task", { name, deadline })
      .then((res) => {
        this.setState({
          currentTasks: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateTask = ({ id, name, deadline }) => {
    axios
      .put(`/api/task/${id}`, { name, deadline })
      .then((res) => {
        this.setState({
          currentTasks: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className='Tasks'>
        <Header />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/add' component={AddTask} />
          <Route
            path='/list'
            render={(props) => (
              <TaskList
                {...props}
                editTask={this.editTask}
                deletingTask={this.removeTask}
                deleted={this.state.deleted}
              />
            )}
          />
          <Route path='/*' component={Landing} />
        </Switch>
        {/* {**<Functional
          taskList={this.state.currentTasks}
          newTask={this.newTask}
          updateTask={this.updateTask}
          removeTask={this.removeTask}
        />} */}
      </div>
    )
  }
}

export default TaskApp
