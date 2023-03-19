import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  title: { type: string, requeired: true },
  description: { type: string, required: true },
  cost: { type: Number, required: true },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  collaboratorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Collab",
    required: true,
  },
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
      required: false,
    },
  ],
});

module.exports = mongoose.model("Job", jobSchema);
