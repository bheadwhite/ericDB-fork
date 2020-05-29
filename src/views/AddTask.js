import React from "react"
import axios from "axios"

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editId: null, //id of the task we're editing
      name: "",
      deadline: "",
      loading: false,
    }
  }

  componentDidMount() {
    const { params } = this.props.match
    if (params?.editId != null) {
      console.log("sending off")
      axios.get(`/api/getTaskById/${params.editId}`).then((res) => {
        if (res.data.id > -1) {
          this.setState({ editId: res.data.id, name: res.data.name, deadline: res.data.deadline })
        }
      })
    }
  }

  editTask = ({ name, deadline, id }) => this.setState({ name, deadline, editId: id })
  deletingTask = (id) => this.props.removeTask(id)

  addNewTask = () => {
    this.setState({ loading: true })
    axios
      .post("/api/task", { name: this.state.name, deadline: this.state.deadline })
      .then((res) => {
        this.resetState()
      })
      .catch((err) => {
        console.log(err)
        this.resetState()
      })
  }

  updateTask = () => {
    axios
      .put(`/api/task/${this.state.editId}`, {
        name: this.state.name,
        deadline: this.state.deadline,
      })
      .then((res) => {
        this.props.history.push("/list")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value })
  resetState = () => this.setState({ editId: null, name: "", deadline: "", loading: false })

  render() {
    const { editId, name, deadline } = this.state
    return (
      <div>
        <h4>Add New Task</h4>
        <input
          placeholder='Your wifes new demand'
          name='name'
          value={name}
          onChange={this.handleInput}
        />
        <input
          placeholder='Complete date/time'
          name='deadline'
          value={deadline}
          onChange={this.handleInput}
        />
        {editId != null ? (
          <>
            <button onClick={this.updateTask}>update my task</button>
            <button onClick={this.resetState}>cancel</button>
          </>
        ) : (
          <button onClick={this.addNewTask}>No Going Back Now</button>
        )}
      </div>
    )
  }
}

export default AddTask
