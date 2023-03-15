const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: string, requeired: true },
  login: { type: string, required: true },
  password: { type: string, required: true },
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  ],
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: false,
  },
  chat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: false,
    },
  ],
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
      required: false,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
