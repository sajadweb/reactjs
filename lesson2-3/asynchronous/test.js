setTimeout(myFunction1, 3000);

function myFunction1() {
  //document.getElementById("demo").innerHTML = "I love You !!";
}

var time=setInterval(myFunction2, 1000);
"10:02:32"
function myFunction2() {
  let d = new Date();
 var d2 = d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
  console.log(d2)
}