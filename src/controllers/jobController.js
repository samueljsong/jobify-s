/**
 * This Module is used for controlling the logic
 * for the functions regarding jobs.
 */

const getAllJobs = (req, res) => {
    res.send("Get all jobs");
};

const getOneJob = (req, res) => {
    res.send("Get an existing job");
};

const createCustomJob = (req, res) => {
    res.send("Create custom job to add to your dashboard");
};

const updateCustomJob = (req, res) => {
    res.send("Updating a custom job in your dashboard");
};

const deleteCustomJob = (req, res) => {
    res.send("Delete a custome job in your dashboard");
};

module.exports = {
    getAllJobs,
    getOneJob,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob,
};
