const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  collabId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collab",
    required: true,
  },
  messages: [
    {
      type: string,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
