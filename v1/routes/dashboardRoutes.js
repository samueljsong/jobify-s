/**
 * This Module is used for routing the endpoints of the api
 * regarding the jobs you have in your dashboard.
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Open your dashboard");
});

router.get("/:jobId", (req, res) => {
    console.log("Getting");
});

router.post("/create", (req, res) => {
    console.log("Creating a custom job to add to dashboard.");
});

module.exports = router; // This file is now considered a module in Node.js
