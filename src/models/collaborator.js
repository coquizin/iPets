import mongoose from "mongoose";

const collaboratorSchema = mongoose.Schema({
  name: { type: string, requeired: true },
  login: { type: string, required: true },
  password: { type: string, required: true },
  jobs: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: false },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: false },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
    required: false,
  },
});

module.exports = mongoose.model("Collab", collaboratorSchema);
