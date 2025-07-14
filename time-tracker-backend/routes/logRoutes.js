const express = require("express");
const router = express.Router();
const TimeLog = require("../models/TimeLog");

router.post("/add", async (req, res) => {
  const { site, timeSpent } = req.body;
  try {
    const log = new TimeLog({ site, timeSpent });
    await log.save();
    res.status(201).json({ message: "Time log saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const logs = await TimeLog.find().sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
