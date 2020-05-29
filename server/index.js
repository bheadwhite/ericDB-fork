const express = require("express")
const app = express()
const ctrl = require("./controllers")

const SERVER_PORT = 4000

app.use(express.json())

app.get("/api/task", ctrl.getTasks)
app.get("/api/getTaskById/:task_id", ctrl.getTaskById)
app.post("/api/task", ctrl.addTasks)
app.put("/api/task/:task_id", ctrl.editTasks)
app.delete("/api/task/:task_id", ctrl.deleteTasks)

app.listen(SERVER_PORT, () => console.log(`Listening for your wife's tasks on port ${SERVER_PORT}`))
