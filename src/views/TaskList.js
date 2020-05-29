import React from "react"
import Task from "../Components/Task"
import axios from "axios"

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      updated: false,
    }
  }
  getList() {
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

  componentDidMount() {
    this.getList()
  }

  componentDidUpdate() {
    if (this.props.deleted && !this.state.updated) {
      this.getList()
      this.setState({ updated: true })
    }
  }

  render() {
    return this.state.taskList.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          editTask={this.props.editTask}
          deletingTask={this.props.deletingTask}
        />
      )
    })
  }
}

export default TaskList
