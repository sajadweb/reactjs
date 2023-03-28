//Exception handling
try {
  //code would be written here.
} catch (e) {

}
//e is the exception value.
try {
  throw Error("Oh no :(");
} catch (error) {
  console.log(error);
}

//extend
class NoPersoninMallError extends Error {
  //...
}
throw new NoPersoninMallError();

//ex
class BadrequestError extends Error {
    constructor(msg){
        super({
            status: 4000,
            msg
        })
    }
  }