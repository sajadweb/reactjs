/**
Promise.all()
The Promise. all() method accepts an iterable of promises as an input and returns a single Promise that fixes to an array of the input promises' results. 
*/
const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
  resolve(5);
});
const promise2 = 54;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("foo");
    resolve("foo");
  }, 5000);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
/**
 Promise.any()
Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If there are no promises in the iterable fulfill, then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors. This method is the opposite of Promise.all().
 */
const promiseand1 = Promise.reject(0);
const promiseand2 = new Promise((resolve) => setTimeout(resolve, 100, "Large"));
const promiseand3 = new Promise((resolve) => setTimeout(resolve, 500, "Small"));
const promises = [promiseand1, promiseand2, promiseand3];
Promise.any(promises).then((value) => console.log(value));

//Promise.allSettled()
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// Expected output:
// "fulfilled"
// "rejected"
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]

// solution
// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000)
.then(() => console.log("runs after 3 seconds"));
