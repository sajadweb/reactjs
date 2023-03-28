const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
  resolve(5);
});
const promise2 = 54;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("foo");
    reject("foo");
  }, 5000);
});
Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log("resualt", values);
  return values;
})
.then((values) => {
  console.log("resualt 2", values);
  return ['a'];
})
.then((values) => {
  console.log("resualt 3", values);
  return ['a', 'b'];
})
.catch((error)=>{
  console.log("error", error);
})
.finally(()=>{
  console.log("finally values");
});
console.log("31 fsd");