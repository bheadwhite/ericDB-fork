const task = [{ id: 0, name: "Mowing the lawn", deadline: "7 P.M." }]
let id = 1

module.exports = {
  // CREATE
  addTasks: (req, res) => {
    const { name, deadline } = req.body
    const newTask = { id, name, deadline }
    task.push(newTask)
    id++
    res.status(200).send(task)
  },
  // READ
  getTasks: (req, res) => {
    res.status(200).send(task)
  },
  // POST/PUT/UPDATE
  editTasks: (req, res) => {
    const { task_id } = req.params
    const { name, deadline } = req.body
    j
    const index = task.findIndex((element) => element.id === +task_id)
    if (index === -1) {
      return res.status(404).send("Wife must not have assigned this task yet.")
    }
    task[index].name = name
    task[index].deadline = deadline
    res.status(200).send(task)
  },
  // DELETE
  deleteTasks: (req, res) => {
    const { task_id } = req.params
    const index = task.findIndex((element) => element.id === +task_id)

    if (index === -1) {
      return res.status(404).send("Wife must not have assigned this task yet.")
    }
    task.splice(index, 1)
    res.status(200).send(task)
  },
}
