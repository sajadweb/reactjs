var events = require("events");
var eventEmitter = new events.EventEmitter();

//Assign the eventhandler to an event:
eventEmitter.on("new token", function (token) {
  console.log("save in storeg", token);
});
eventEmitter.on("new token", function (token) {
  console.log("profile user update", token);
});

//Fire the 'scream' event:
setTimeout(()=>{
  //login
	eventEmitter.emit("new token", "sadxawsdawdsxa1");
	// eventEmitter.emit("new token", "sadxawsdawdsxa2");
	// eventEmitter.emit("new token", "sadxawsdawdsxa3");
},3000)
