/**
 * This Module is used for linking the service to the router.
 * acts as the 'controller'
 */

const jobService = require("../services/jobService");

const getAllJobs = (req, res) => {
    const allJobs = jobService.getAllJobs();
    res.send("Get all jobs");
};

const getOneJob = (req, res) => {
    const job = jobService.getOneJob();
    res.send("Get an existing job");
};

const createCustomJob = (req, res) => {
    const createJob = jobService.createCustomJob();
    res.send("Create custom job to add to your dashboard");
};

const updateCustomJob = (req, res) => {
    const updateJob = jobService.updateCustomJob();
    res.send("Updating a custom job in your dashboard");
};

const deleteCustomJob = (req, res) => {
    const deleteJob = jobService.deleteCustomJob();
    res.send("Delete a custome job in your dashboard");
};

module.exports = {
    getAllJobs,
    getOneJob,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob,
};
