Array.prototype.sums = function () {
  var sum=0;
  for (var i = 0; i < this.length; i++) {
   // this[i] = this[i].toLowerCase();
    sum+=this[i];
  }
  return sum;
}
String.prototype.toUp=function(){
    return this.toUpperCase();
}
Date.prototype.toTime=function(min){
    var now =this.getTime() + min*60*1000;
    console.log(now);
    return new Date(now);
}
Number.prototype.toFotmat=function(){
    ///rfvdgfvd
    return "200,000";
}
console.log(new Date().toTime(5));
