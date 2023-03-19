import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("Rating", ratingSchema);
