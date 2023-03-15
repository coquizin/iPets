const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: { type: string, requeired: true },
  postal: { type: Number, required: true },
  city: { type: string, required: true },
  number: { type: Number, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Address", addressSchema);
