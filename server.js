
// Setup empty JS object to act as endpoint for all routes
const projectData ={};
const express = require('express');
//start an instance of app
const app = express();
// Require Express to run server and routes
const bodyParser = require('body-parser');
// Start up an instance of app

/* Middleware*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));
// get all route
app.get('/all',function(req,res){
    res.send(projectData);
});
// post to add route
app.post('/add', addProjectData);
function addProjectData(request,response) {
    let data = request.body;
    projectData.temp = data.temp;
    projectData.date =  data.date;
    projectData.content = data.content;
    response.send(projectData);
}

// Setup Server
const port = 8080;
const server = app.listen(port , listening);


function listening() {
    console.log(`port being used is ${port}`);

};

