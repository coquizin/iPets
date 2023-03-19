import mongoose from "mongoose";

const petSchema = mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pet", petSchema);
