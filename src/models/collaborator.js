import mongoose from "mongoose";

const collaboratorSchema = mongoose.Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  cpf: { type: String, required: false },
  birthdate: { type: Date, min: "1920-01-01", max: "2020-01-01" },
  phone: { type: String, required: false },
  jobs: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: false },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: false },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
    required: false,
  },
});

module.exports = mongoose.model("Collab", collaboratorSchema);
