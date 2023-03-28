class NumberError extends Error {
  constructor(msg) {
    console.log("Opps! " + msg);
    super("Opps! " + msg);
  }
}
function sum(a, b) {
  if (typeof a !== "number") {
    throw new NumberError("number is not valid");
  }
  return a + b;
}
try {
  console.log(sum("sdfsw", 3));
} catch (error) {
  // console.log(error);
}
