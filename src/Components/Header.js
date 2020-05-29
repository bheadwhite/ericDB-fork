import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <h1 className='header'>To-Do List</h1>
      <Link to='/'>
        <div>Home</div>
      </Link>
      <Link to='/list'>
        <div>Tasks</div>
      </Link>
      <Link to='/add'>
        <div>Add New Task</div>
      </Link>
    </div>
  )
}
export default Header
