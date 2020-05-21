# To-Do Task List

## Application Concept and Wireframe

### Application Concept
- This is a To-Do list that helps you sort what tasks need to be completed or added on.

- It will utalize my own API to be used.

- Full CRUD
    - Get: Fetch all tasks
    - POST: New tasks added will be posted with current tasks
    - PUT: Add more to the task or change some of the task with an edit.
    - Delete: Able to delete completed tasks.

 ## Functionality

 - Top of the page will display app name
 - When the app loads, it will show the name of the app at the top, current tasks lined up in a column, with buttons to add new tasks, delete tasks and edit tasks.
 - The list will show all current tasks
 - The list will allow you add more.
 - The list will allow you to edit the task selected, allowing you to edit parts that have been completed on the task, add more to that specific task.
 - the list will also allow you to delete the task, and continue on to the next task.

 ## Endpoints

 - GET: fect our created API from back end.
 - POST: push our new tasks to the list
 - PUT: Edit our task
 - Delete: Delete tasks of our list

 ## Component Architecture

 - App.js will be statefull and hold our list information. (This.state.task)
    - Header.js will be functional
    - Functional.js will be stateful. Will take props, edit, and delete.
 
