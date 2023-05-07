const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(bodyParser.json()); // support encoded bodies
let todos = [
  {
    id: 1,
    title: "Backend Todo 1",
    complete: true,
  },
  {
    id: 2,
    title: "Backend Todo 2",
    complete: false,
  },
  {
    id: 3,
    title: "Backend Todo 3",
    complete: false,
  },
];
app.get("/", function (req, res, next) { 
  res.send('it is bsckend');
});
app.get("/todos", function (req, res, next) { 
  res.send(todos);
});
app.post("/todos/add", function (req, res, next) {
  // echo body as JSON
  console.log('api',req.body)
  //save data in array
  todos.push(req.body);
  //send date to client
  res.send(req.body);
});
app.post("/todos/complete", function (req, res, next) {
  // echo body as JSON
  console.log('api',req.body)
  //save data in array
  todos=todos?.map((todo) => {
    if (todo.id === req.body.id) {
      return { ...todo, complete: !todo.complete };
    } else {
      return todo;
    }
  });
  //send date to client
  res.send(req.body);
});
app.post("/todos/delete", function (req, res, next) {
  // echo body as JSON
  console.log('api',req.body)
  //save data in array
  todos = todos?.filter((todo) => {
    if (todo.id === req.body.id) {
      return false;
    } else {
      return todo;
    }
  })
  //send date to client
  res.send(req.body);
});
app.post("/todos/edit", function (req, res, next) {
  // echo body as JSON
  console.log('api',req.body)
  //save data in array
  todos = todos.map((todo) => {
    if (todo.id === req.body.id) {
      return req.body;
    } else {
      return todo;
    }
  })
  //send date to client
  res.send(req.body);
});

app.listen(8000, function () {
  console.log("server run in http://localhost:8000");
});
