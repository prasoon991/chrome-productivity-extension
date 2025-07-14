const mongoose = require("mongoose");

const timeLogSchema = new mongoose.Schema({
  site: String,
  timeSpent: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TimeLog", timeLogSchema);
