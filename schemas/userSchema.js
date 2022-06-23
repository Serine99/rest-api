import mangoose from "mangoose";

const { Schema } = mangoose;
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
});
