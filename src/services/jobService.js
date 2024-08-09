/**
 * This Module is used for the actual logic
 * of the functions used for each API call.
 */
const axios = require("axios");
const db_jobs = require("../database/db_jobs.js");

const typeList = {
    SEARCH: "search",
    DETAILS: "job-details",
    SALARY: "estimated-salary",
    FILTER: "search-filters"
}

const apiCall = async (params, type) => {
    const API_URL = process.env.API_URL + type;
    const API_HOST = process.env.API_HOST;
    const API_KEY = process.env.API_KEY;
    const options = {
        method: 'GET',
        url: API_URL,
        params: params,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST
        }
      };

    try {
        const response = await axios.request(options);
      
        if (response.statusText != 'OK') {
          throw new Error(`Failed to retrieve API job(s)`);
        }

        console.log("Successfully retrieved API jobs");
        return response.data.data;
    } catch (error) {
        throw new Error(`Failed to fetch job(s)`);
    }
}

const getAllJobs = async () => {
    // ! Get jobs from both database and api
    const database_results = await db_jobs.getAllJobs();
    console.log(database_results);
    const pages = 1; // 1 page = 10 results -- 1 page temporarily
    const temp_query = "job"; // JSearch requires a query, could develop (or "borrow") an algorithm to determine which type of jobs to initially show the user.
    const params = {
        query: temp_query,
        num_pages: pages
    }

    const api_results = await apiCall(params, typeList.SEARCH);
    return [...database_results, ...api_results] || [];
};

const getOneJob = async (req, res) => {
    const params = {
        job_id: req.params.jobId,
        extended_publisher_details: 'false'
    }

    const response = await apiCall(params, typeList.DETAILS);
    return response || [];
};

const createCustomJob = () => {
    return;
};

const updateCustomJob = () => {
    return;
};

const deleteCustomJob = () => {
    return;
};

module.exports = {
    getAllJobs,
    getOneJob,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob,
};
