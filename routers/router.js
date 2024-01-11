const express = require("express");
const router = express.Router();
const dataRouter = require("./data.route");

// Default router
router.get("/", (req, res) => {
  return res.json({
    error: false,
    statusCode: 200,
    message: "Successful access homepage API",
  });
});
router.use("/data", dataRouter);

module.exports = router;
