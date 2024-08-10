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
    const results_list = [...database_results, ...api_results];
    return {success: results_list != [], jobs: results_list};
};

const getOneJob = async (req, res) => {
    // ! Check if job is custom or from api
    let response;
    if (req.params.jobId) { // If there is a jobId param
        const params = {
            job_id: req.params.jobId,
            extended_publisher_details: 'false'
        }
    
        response = await apiCall(params, typeList.DETAILS);
    } else {
        const params = {
            job_id: req.params.jobId
        }
        response = await db_jobs.getCustomJobDetails(params);
    }
    return {success: response != [], jobs: response};
};

const createCustomJob = async (req, res) => {
    const params = {
        position: req.params.position,
        description: req.params.description,
        date_posted: req.params.date_posted || Date.now(),
        temp_skills: req.params.temp_skills || "No skills",
        employement_type: req.params.employement_type,
        company_name: req.params.company_name,
        company_link: req.params.company_link,
        company_logo_link: req.params.company_logo_link,
        job_city: req.params.job_city,
        job_state: req.params.job_state,
        job_country: req.params.job_country,
    }

    const response = await db_jobs.createCustomJob(params);
    return {success: response};
};

const updateCustomJob = async (req, res) => {
    const params = {
        position: req.params.position,
        description: req.params.description,
        date_posted: req.params.date_posted || Date.now(),
        temp_skills: req.params.temp_skills || "No skills",
        employement_type: req.params.employement_type,
        company_name: req.params.company_name,
        company_link: req.params.company_link,
        company_logo_link: req.params.company_logo_link,
        job_city: req.params.job_city,
        job_state: req.params.job_state,
        job_country: req.params.job_country,
    }

    const response = await db_jobs.updateCustomJob(params);
    return {success: response};
};

const deleteCustomJob = async (req, res) => {
    const params = {
        custom_job_id: req.params.custom_job_id,
    }

    const response = await db_jobs.updateCustomJob(params);
    return {success: response};
};

module.exports = {
    getAllJobs,
    getOneJob,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob,
};
