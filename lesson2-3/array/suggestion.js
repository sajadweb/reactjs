function suggest(search, count) {
  // dog training
  const training = [
    "tips",
    "collars",
    "classes",
    "videos",
    "clicker",
    "houston",
    "certification",
    "books",
    "clhicago",
    "chicago",
  ];
  var sg=[];
  for (let i = 0; i < training.length; i++) {
    console.log('i',i)
    const element = training[i].indexOf(search);
    if(element>=0){
      sg.push(training[i]);
    }
    if(sg.length === count){
      break;
    }
  }
  return sg;
}

console.log(suggest("cl", 2)); //[{search:"cl",suggest:"classes"}]
//suggest("cl", 2); //[{search:"cl",suggest:"classes"},{search:"cl",suggest:"clicker"}]
