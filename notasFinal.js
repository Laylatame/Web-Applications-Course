//When button is type submit
$("#dogForm").submit(function(event){
    event.preventDefault();

    //Get value of input
    var dogBreed = ($("#searchDog").val());
    var numImages = parseInt($("#numImgs").val());
});

//<button id="buttonPost">Post</button>
$("#buttonPost").on("click", event => {
    event.preventDefault();
});

//Funciones

function init(){

}

//AJAX
$.ajax({
    url: 'https://dog.ceo/api/breed/' + dogBreed + '/images/random/' + numImages,
    data: JSON.stringify({
        "title" : title
    }),
    method: "GET",
    dataType: "json",
    success: function(responseJson){
    },
    error: function(err){
        console.log(err);
    }
});

//Managing arrays

let arr=[1,2,3,4];

nums.push(4); //Add at the end
nums.pop(); //Access the last item
nums.shift(8); //Adds at the beggining
nums.unshift(); //Access the first item

nums.splice(2,1); //Index to start at, num of elements to erase
nums.splice(2,0,20); //Index to start, num to erase, add new element there

arr.forEach((item) => {

})



//USING NODE
/*
npm init
package name: firstServer
entry point: server.js
npm install express
npm install morgan
npm install body-parser
npm start
npm nodemon
*/

//SET UP DATABASE - CONFIG.JS
exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://musicAPI:music123@cluster0-vttkx.mongodb.net/musicAPIDev?retryWrites=true&w=majority";
exports.PORT = process.env.PORT || 8080;

//SERVER
let express = require( "express" );
let morgan = require( "morgan" );
let mongoose = require( "mongoose" );
let bodyParser = require( "body-parser" );
let { DATABASE_URL, PORT } = require('./config');
let { PetList, UserList } = require('./model');

let app = express();
let jsonParser = bodyParser.json();
mongoose.Promise = global.Promise;

app.use( express.static( "public" ) );
app.use( morgan( "dev" ) );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  if (req.method === "OPTIONS") {
    return res.send(204);
  }
  next();
});

//Create model
//Define schemas
let studentSchema = new mongoose.Schema({
    title: String,
    id: {
        type: Number,
        required: true
    }
});
let Student = mongoose.model( 'Student', studentSchema );
module.exports = Student;

//GET - model
let StudentList = {
    get : function(){
		return Student.find()
				.then( students => {
					return students;
				})
				.catch( error => {
					throw Error( error );
				});
	}
}
//GET - server
app.get("api/getPosts", (req, res) => {
    StudentList.get()
        .then( students => {
            return res.status( 200 ).json( students );
        })
        .catch( error => {
            res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status( 500 ).json({
				status : 500,
				message : "Something went wrong with the DB. Try again later."
			})
        });
});

//Otra manera, directamente en server
app.get("apu/getPosts", (req, res) => {
    let username = req.body.username;
return Student.find().exec(function(err, students){
    if(err){
        return res.status( 500 ).json({message: "", status: 500});
    } else{
        return res.status(200).json(students);
    }
});
});

//Mongoose
User.findOne({id: id});
User.find();
User.create(user);
User.findOneAndUpdate( {id : student.id}, {$set : updatedStudent}, {new : true})
User.deleteOne({id : id})

//GET - script.js
$.ajax({
    url: "http://localhost:8080/api/blog-posts",
    data: JSON.stringify({
        "username" : username
    }),
    method: "GET",
    dataType: "json",
    success: function(response){
        
    },
    error: function(err){
        console.log("Error");
    }
});

//POST - script.js
$.ajax({
    url: "http://localhost:8080/api/register",
    data: JSON.stringify({
        "username": $("#usernameRegister").val(),
        "password": $("#passwordRegister").val(),
    }),
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    success: function(response){
    },
    error: function(err){
        return err;
    }
});

//DELETE - script.js
$.ajax({
    url: "http://localhost:8080/api/deleteReview",
    data: JSON.stringify({"id": id}),
    method: "DELETE",
    dataType: "json",
    contentType: "application/json",
    success: function(response){
    },
    error: function(err){
    }
});

//UPDATE - script.js
$.ajax({
    url: "http://localhost:8080/api/blog-posts" + "/" + id,
    method: "PUT",
    data: JSON.stringify({
        "id": id,
        "content": content
    }),
    dataType: "json",
    contentType: "application/json",
    success: function(response){
    },
    error: function(err){
    }
});


let server;

function runServer(port, databaseUrl){
	return new Promise( (resolve, reject ) => {
		mongoose.connect(databaseUrl, { useNewUrlParser: true }, response => {
			if ( response ){
				return reject(response);
			}
			else{
				server = app.listen(port, () => {
					console.log( "App is running on port " + port );
					resolve();
				})
				.on( 'error', err => {
					mongoose.disconnect();
					return reject(err);
				})
			}
		});
	});
}

function closeServer(){
	return mongoose.disconnect()
		.then(() => {
			return new Promise((resolve, reject) => {
				console.log('Closing the server');
				server.close( err => {
					if (err){
						return reject(err);
					}
					else{
						resolve();
					}
				});
			});
		});
}

runServer( PORT, DATABASE_URL )
	.catch( err => {
		console.log( err );
});

module.exports = { app, runServer, closeServer };
