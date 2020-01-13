
let express = require("express"); //Import a package 
let morgan = require("morgan"); //Morgan is a logger to log stuff when requests are executed
let bodyParser = require('body-parser');

let app = express(); //Set up the endpoints
let jsonParser = bodyParser.json();

app.use(express.static('public'));
app.use(morgan("dev"));

let students = [
    {
        name: "Mario",
        id: 5637
    },
    {
        name: "Maria",
        id: 9876
    },
    {
        name: "Juan",
        id: 1234
    },
    {
        name: "Pedro",
        id: 4738
    }
];

//Building up the API, 3 parameters: URL, middleware, function that requires request, response, next
    //Request holds any information coming from the front ent
    //Response is the parameter used to send back information as a response
    //Next points towards the next function to be executed
//Middleware can be a function to execute something before executing the current function
app.get("/api/students", (req, res, next) => {
    //ERROR
    //res.statusMessage = "Something went wrong. Try again later."
    //return res.status(400).json({message : "Something went worng. Try again", status: 400});
    
    //When return is successful
    return res.status(200).json(students);

});

app.post( "/api/postStudent", jsonParser, (req, res) => {
    //console.log(req.body);

    let name = req.body.name;
    let id = req.body.id;

    if(! name || ! id){
        res.statusMessage = "Missing field in body!";
        return res.status(406).json({ message : "Missing field in body!", status: 406});
        //Status 406 means not acceptable
    }

    for(let i=0; i<students.length; i++){
        if(students[i].id == id){
            return res.status(409).json({message : "Repeated identifier", status: 409});
        }
    }

    students.push({name: name, id: id});

    return res.status(201).json({message: "Success: " + name + " was added.", status: 201});
});

app.get("/api/getStudentById", (req, res, next) => {

    let id = req.query.id;

    if(! id){
        return res.status(406).json({message: "Missing id in param", status:406});
    }

    for(let i = 0; i < students.length; i++){
        if(students[i].id == id){
            return res.status(202).json({message: "Student found! Name: " + students[i].name, stauts: 202});
        }
    }

    return res.status(404).json({message: "Student id not found on the list", stauts: 404});

});

app.delete("/api/removeStudent/:id", (req, res, next) => {

    let id = req.params.id;

    for(let i=0; i<students.length; i++){
        if(students[i].id == id){
            let remStudent = students[i].name;
            delete students[i];
            return res.status(200).json({message: "Deleted: " + remStudent, status: 200});
        }
    }

    return res.status(404).json({message: "ID not found on the list", status: 404});
});

app.put("/api/updateStudent/:idP", (req, res, next) => {

    let name = req.body.name;
    let id = req.body.id;
    let idP = req.params.id;

    if(! name || ! id){
        return res.status(406).json({message : "Missing field in body!", status: 406});
    }

    if(id != idP){
        return res.status(409).json({message: "Bad request: ID in params does not match ID in body", status: 409});
    }

    for(let i=0; i<students.length; i++){
        if(students[i].id == id){
            students[i].name = name;
            return res.status(200).json({message: "Student object updated.", status: 200});
        }
    }

    return res.status(404).json({message: "ID not found.", status: 404});

});

//Listen simulates the main function, to use something it must be declared before
app.listen("8080", () => {
    //When someone accesses the endpoint through the port 8080, something is going to be executed
    console.log("Our app is running on port 8080");

});


/* How to sent parameters using GET

url?id=123   -> req.query.id
url/:id      -> req.params.id
url/123      -> req.body........ (options)

Sending parameters through the body instead of the URL when using post

*/


/* 

NPM
1. npm init    -> initializes a server
2. npm install name-package
3. npm start   -> when inside the folder to be executes

Postman
http://localhost:8080/api/students

*/

//When using a middleware, it is neccessary to verify it is installed