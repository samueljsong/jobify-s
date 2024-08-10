/**
 * This Module is used for linking the service to the router.
 * acts as the 'controller'
 */

const jobService = require("../services/jobService");

const getAllJobs = async (req, res) => {
    const response = await jobService.getAllJobs();
    res.send({success: response.success, jobs: response.jobs});
};

const getOneJob = async (req, res) => {
    const response = await jobService.getOneJob(req, res);
    res.send({success: response.success, jobs: response.jobs});
};

const createCustomJob = async (req, res) => {
    const response = await jobService.createCustomJob(req, res);
    res.send({success: response.success});
};

const updateCustomJob = async (req, res) => {
    const response = await jobService.updateCustomJob(req, res);
    res.send({success: response.success});
};

const deleteCustomJob = async (req, res) => {
    const response = await jobService.deleteCustomJob(req, res);
    res.send({success: response.success});
};

module.exports = {
    getAllJobs,
    getOneJob,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob,
};
