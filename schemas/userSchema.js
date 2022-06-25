import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
  },
});
const User = mongoose.model("User", UserSchema);
export default User;
