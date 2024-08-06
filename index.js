const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

//Routers
const v1JobRouter = require("./v1/routes/jobRoutes");

app.use(express.json());

//Routes
app.use("/api/v1/jobs", v1JobRouter); // Explanation: When api has /api/v1/jobs in URL, route to => v1JobRouter

app.get("/", (req, res) => {
    console.log("hello your app is working");
});

app.listen(PORT, () => {
    console.log(`APP ON PORT: ${PORT}`);
});
