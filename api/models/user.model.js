import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Ensures usernames are unique
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures emails are unique
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a User model from the userSchema
const User = mongoose.model('User', userSchema);

export default User;
