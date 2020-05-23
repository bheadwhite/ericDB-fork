import React, {Component} from 'react'

class Functional extends Component{
    constructor(){
        super()
        this.state = {
            isEditing: false,
            userInput: '',
        }
    }



    listOfTasks = (e) => {
        this.props.currentTask(e.target.value)
    }

    editingTask = (e) => {
        this.props.getTask(e.target.value)
    }

    savingTask = (e) => {
        this.props.saveTask(e.target.value)
    }

    deletingTask = (e) => {
        this.props.removeTask(e.target.value)
    }

    





    render(){
        const {task: {id, name, deadline}} = this.props

        return(
            <div>
                
                {name + " " + "needs to be done by" + " " + deadline} <button>Edit</button><button onClick={() => this.deletingTask(id)}>Completed</button>

                <h4>Add New Task</h4><input placeholder='Your wifes new demand'/><button>Submit</button>
            </div>
        )
    }
}
export default Functional