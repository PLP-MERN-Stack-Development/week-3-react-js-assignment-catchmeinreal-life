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

export { addTask, getTasks };