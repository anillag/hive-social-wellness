const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const todoSchema = new Schema(
  {
    todoItem: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const Todos = model("Todos", todoSchema);

module.exports = Todos;
