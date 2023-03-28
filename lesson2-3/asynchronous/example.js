 async function fun() {
   await promise3() 
  console.log('dddd 3')
}
function promise3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("line 8");
      resolve("foo");
    }, 5000);
  });
}
await promise3();
console.log('dddd 15')