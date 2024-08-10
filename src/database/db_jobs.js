const { deleteCustomJob } = require("../services/jobService.js");
const database = require("./db_connection.js");

const getAllJobs = async () => {
  const query = `
  SELECT 
  *
  FROM custom_job
  WHERE 1 = 1`;

  try {
    const result = await database.query(query);
    return result[0];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getCustomJobDetails = async (params) => {
    const query = `
    SELECT 
    *
    FROM custom_job
    WHERE custom_job_id = :custom_job_id`;

    try {
      const result = await database.query(query, params);
      return result[0];
    } catch (err) {
      console.log(err);
      return [];
    }
}

const createCustomJob = async (params) => {
    const query = `
    INSERT INTO 
    custom_job
    (position, description, date_posted, temp_skills, employment_type, company_name, company_link, company_logo_link, job_city, job_state, job_country)
    VALUES
    (:position, :description, :date_posted, :temp_skills, :employment_type, :company_name, :company_link, :company_logo_link, :job_city, :job_state, :job_country)`;

    try {
      const result = await database.query(query, params);
      return result[0].insertId !== undefined;
    } catch (err) {
      console.log(err);
      return false;
    }
}

const updateCustomJob = async (params) => {
    const query = `
      UPDATE custom_job 
      SET position = :position, 
      description = :description, 
      date_posted = :date_posted, 
      temp_skills = :temp_skills, 
      employment_type = :employment_type, 
      company_name = :company_name, 
      company_link = :company_link, 
      company_logo_link = :company_logo_link, 
      job_city = :job_city, 
      job_state = :job_state,
      job_country = :job_country
      WHERE (custom_job_id = :custom_job_id);
      `;

    try {
        const result = await database.query(query, params);
        return result[0].affectedRows !== 0;
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteEvent = async (params) => {
    const query = `
    DELETE FROM custom_job
    WHERE custom_job_id = :custom_job_id;
  `;

    try {
        const result = await database.query(query, params);
        return result[0].affectedRows !== 0; // Check if this is right...
    } catch (err) {
        console.log(err);
        return false;
    }

};


module.exports = {
    getAllJobs,
    getCustomJobDetails,
    createCustomJob,
    updateCustomJob,
    deleteCustomJob
}