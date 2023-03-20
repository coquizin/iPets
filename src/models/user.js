const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cpf: { type: String, required: false },
  birthdate: { type: Date, min: "1920-01-01", max: "2020-01-01" },
  phone: { type: String, required: false },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: false,
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
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

const User = mongoose.model("users", userSchema);
module.exports = User;
