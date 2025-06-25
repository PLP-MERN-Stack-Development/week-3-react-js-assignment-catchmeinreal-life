import mongoose from 'mongoose';

// Task schema for a simple task manager
const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  // Optionally, you can add a reference to the user who created the task
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Task', taskSchema);