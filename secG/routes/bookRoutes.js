const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET request received");
});

router.post("/", (req, res) => {
  res.send("POST request received");
});

module.exports = router;