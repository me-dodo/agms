const express = require("express");
const router = express.Router();
const controller = require("../controllers/data.controller");

router.post("/create", controller.createData);
router.get("/list", controller.listData);

module.exports = router;
