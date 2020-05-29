import React from "react"
import axios from "axios"
import Task from "../Components/Task"

class TaskList extends React.Component {
  constructor() {
    super()
    this.state = {
      taskList: [],
    }
  }

  componentDidMount() {
    return axios
      .get("/api/task")
      .then((res) => {
        this.setState({
          taskList: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  removeTask = (id) => {
    axios
      .delete(`/api/task/${id}`)
      .then((res) => {
        this.setState({
          taskList: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  editTask = (task) => {
    this.props.history.push(`/add/${task.id}`)
  }

  render() {
    return this.state.taskList.map((task) => {
      return (
        <Task
          key={task.id}
          task={task} //read (going down)
          editTask={this.editTask} //write (sending up)
          deletingTask={this.removeTask} //write (sending up)
        />
      )
    })
  }
}

export default TaskList
