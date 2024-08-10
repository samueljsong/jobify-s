/**
 * This Module is used for linking the service to the router.
 * acts as the 'controller'
 */

const jobService = require("../services/jobService");

const getAllJobs = (req, res) => {
    const response = jobService.getAllJobs();
    res.send({success: response.success, jobs: response.jobs});
};

const getOneJob = (req, res) => {
    const response = jobService.getOneJob(req, res);
    res.send({success: response.success, jobs: response.jobs});
};

const createCustomJob = (req, res) => {
    const response = jobService.createCustomJob();
    res.send({success: response.success});
};

const updateCustomJob = (req, res) => {
    const response = jobService.updateCustomJob();
    res.send({success: response.success});
};

const deleteCustomJob = (req, res) => {
    const response = jobService.deleteCustomJob();
    res.send({success: response.success});
};

module.exports = {
    getAllJobs,
    getOneJob,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob,
};
