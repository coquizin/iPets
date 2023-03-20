import mongoose from "mongoose";

const petSchema = mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  complement: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Pet", petSchema);
