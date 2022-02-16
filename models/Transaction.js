const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tranSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tran", tranSchema);
