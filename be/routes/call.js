const express = require("express");
const router = express.Router();

const CallController = require("../controllers/call");
router.post("/addCall", CallController.addCall);
router.get("/getAllCall", CallController.getAllCall);
module.exports = router;
