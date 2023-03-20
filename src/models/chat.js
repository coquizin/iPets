import mongoose from "mongoose";

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
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
