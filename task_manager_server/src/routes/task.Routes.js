import express from 'express';
import { addTask, getTasks, deleteTask } from '../controller/taskContollers.js';

import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/tasks', protect, addTask);
router.get('/tasks', protect, getTasks);
router.delete('/task/:id',protect, deleteTask);

export default router;
// This code defines the routes for adding and getting tasks in a task management application.
// It uses Express.js to create a router that handles POST requests to add tasks and GET requests to retrieve all tasks.
// The `addTask` function is called when a new task is added, and the `getTasks` function is called to fetch all tasks.
// The router is then exported for use in the main application file, allowing it to be mounted on a specific path (e.g., `/api`).
// This modular approach helps keep the code organized and maintainable, separating concerns between routing and business logic.
// The routes are defined in a separate file, which can be imported into the main server file to integrate with the overall application structure.
// This allows for better scalability and easier management of the application's routing logic.