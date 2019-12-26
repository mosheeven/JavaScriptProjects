const warriors = ['joh','nill','bobi','kobi', {name: "dodo", age : "22" , speatlies : "shbash"}];
const warriorsFunc = () => {
    return console.log(warriors)
};


//warriorsFunc();


const car = {
    range: 620,
    fuleSpent: 20,
  };
  
  function calculateFuleConsumption() {
    return this.range / this.fuleSpent;
  }
  
  const newFunction = calculateFuleConsumption.bind(car); // Bound function //ca use apply/call but then newFunction will not be a function 
  
  const a = newFunction();
  console.log(a);
  
  car.fuleSpent = 40;
  const b = newFunction();
  console.log(b);