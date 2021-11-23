const getYieldForPlant = (veggy) => {
  return veggy.yield;
};

const getYieldForCrop = (input) => {
  // console.log("input is", input);
  return input.numCrops * input.crop.yield;
};

const getTotalYield = (object_veg) => {
  // bij object gebruik je for ... in
  for (x in object_veg) {
    // console.log(
    //   "object veg",
    //   object_veg[x],
    //   "wat is x: ",
    //   x,
    //   x.length,
    //   typeof x
    // );

    // console.log("veggies.crops[0]", object_veg.crops[0].crop);
    // console.log("veggies.crops[0].numCrops", object_veg.crops[0].numCrops);
    let sum = 0;
    let i = 0;
    for (i = 0; i < object_veg.crops.length; i++) {
      // console.log(
      //   "object_veg.crops[i].crop.yield",
      //   object_veg.crops[i].crop.yield
      // );
      // console.log("object_veg.crops[i].numCrops", object_veg.crops[i].numCrops);
      sum += object_veg.crops[i].crop.yield * object_veg.crops[i].numCrops;
      // console.log(sum);
      //  sum += crops[i].crop.yield * crops[i].numCrops;
    }
    return sum;
  }

  
};

const getCostsForCrop = (input) => {

  return input.numCrops * input.crop.cost;
};


const getRevenueForCrop = (input) => {

  return input.numCrops * input.crop.yield * input.price;
};

const getProfitForCrop = (input) => {

  return (input.numCrops * input.crop.yield * input.price) - (input.numCrops * input.crop.cost);
};

const getTotalProfit = (object_veg) => {
  
  for (x in object_veg) {
   
    let sum = 0;
    let i = 0;
    for (i = 0; i < object_veg.crops.length; i++) {
     
      sum += (object_veg.crops[i].crop.yield * object_veg.crops[i].numCrops * object_veg.crops[i].price) - (object_veg.crops[i].numCrops * object_veg.crops[i].crop.cost);
     
    }
    return sum;
  }

  
};

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit };
