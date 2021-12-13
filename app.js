import express from "express";

import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";

const PORT = 3000;
const app = express();

app.use(express.json());

// create a get request to show all userSelect
app.get("/", async function (req, res){
  // get all users
  const result = await getUsers();
   // response in json format
  res.json({success: true, payload: result});
});

//create a get request to show usersbyid
app.get("/user/:id", async function (req,res){
  // convert the id from the path into Number and store in variable 
  const idNumber = Number(req.params.id)
  // get user by id
  const result = await getUserByID(idNumber) 
  // response in json format
  res.json({success: true, payload: result});
});

//create a post request to create user;
app.post("/user/:id", async function (req, res){
  //post a request in the body
  const request = req.body
  //get user by id including the new request
  const result = await createUser(request); 
  //response in json format
  res.json({success: true, payload: result});
});

//create a put request to update userbyId;
app.put("/user/:id", async function (req, res){
  // convert the id from the path into Number and store in variable 
  const idNumber = Number(req.params.id);
  // take the body from the request
  const request = req.body;
  // replace the user with id
  const result = await updateUserByID(idNumber, request);
  //response in json format
  res.json({success: true, payload: result});
});

//create a delete request to delete userbyid; deleteUserByID

app.delete("/user/:id", async function (req, res){
  // convert the id from the path into Number and store in variable
  const idNumber = Number(req.params.id);
  // delete the user with that id
  const result = await deleteUserByID(idNumber);
  //response in json format
  res.json({success: true, payload: result});
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
