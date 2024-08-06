/**
 * This module is used for routing the endpoints of the api
 * regarding jobs (both custom and ones found on JSearch).
 */

const express = require("express");
const router = express.Router();

const jobController = require("../../src/controllers/jobController");

router.get("/", jobController.getAllJobs);

router.get("/:jobId", jobController.getOneJob);

router.post("/", jobController.createCustomJob);

//Only works on custom jobs added to dashboard.
router.patch("/:jobId", jobController.updateCustomJob);

router.delete("/:jobId", jobController.deleteCustomJob);

module.exports = router;
