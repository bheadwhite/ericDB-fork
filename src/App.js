import React from "react"
import "./App.css"
import Header from "./Components/Header"
import { Route, Switch } from "react-router-dom"
import { AddTask, TaskList, Landing } from "./views"

const TaskApp = () => (
  <div className='Tasks'>
    <Header />
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/add/:editId' component={AddTask} />
      <Route path='/add' component={AddTask} />
      <Route path='/list' component={TaskList} />
      <Route path='/*' component={Landing} />
    </Switch>
  </div>
)

export default TaskApp
