const express = require("express");
const router = express.Router();
const { createBloodRequest, getRequestsForInstitution } = require("../controllers/bloodRequestController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/request", authMiddleware, createBloodRequest);
router.get("/requests", authMiddleware, getRequestsForInstitution);

module.exports = router;
