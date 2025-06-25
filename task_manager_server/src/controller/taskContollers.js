/**
 * get 
 * update
 * delete
 * post
 */

// get tasks
import Task from "../models/Task.js";

function addTask(req, res) {
    console.log("Adding a new task:", req.body);
    const newTask = new Task(req.body);
    newTask.save()
        .then(() => {
            res.status(201).json({
                message: "Add a new task",
                task: newTask
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to add task",
                error: error.message
            });
        });
}

function getTasks(req, res) {
    Task.find()
        .then((tasks) => {
            res.status(200).json({
                message: "Fetched all tasks",
                tasks: tasks
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to fetch tasks",
                error: error.message
            });
        });
}

function deleteTask(req, res) {
    
    // Expecting task id in req.body or req.query or req.params
    const id = req.params.id; // or req.params.id if you use /task/:id
    if (!id) {
        return res.status(400).json({ message: 'Task id is required' });
    }
    Task.findByIdAndDelete(id)
        .then((deletedTask) => {
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({ message: 'Task deleted', task: deletedTask });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Failed to delete task', error: error.message });
        });
}

export { addTask, getTasks, deleteTask };