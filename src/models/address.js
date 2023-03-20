import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  postal: { type: Number, required: true },
  city: { type: String, required: true },
  number: { type: Number, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  state: { type: String, required: true },
  uf: { type: String, required: true },
  complement: { type: String, required: false },
  country: { type: String, required: true },
  zip: { type: String, required: true },
  district: { type: String, required: true },
});

module.exports = mongoose.model("Address", addressSchema);
