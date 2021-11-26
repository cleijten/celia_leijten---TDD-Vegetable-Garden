const getYieldForPlant = (veggy, env) => {
  if (env) {
    let totalFactor = 1;
    if (env.sun) {
      const valueSun = env.sun;
      if (veggy.factor.sun) {
        const percSun = veggy.factor.sun[valueSun];
        totalFactor = totalFactor * (1 + percSun / 100);
      }
    }
    if (env.wind) {
      const valueWind = env.wind;
      if (veggy.factor.wind) {
        const percWind = veggy.factor.wind[valueWind];
        totalFactor = totalFactor * (1 + percWind / 100);
      }
    }

    if (env.temp) {
      const valueTemp = env.temp;
      if (veggy.factor.temp) {
        const percTemp = veggy.factor.temp[valueTemp];
        totalFactor = totalFactor * (1 + percTemp / 100);
      }
    }

    return veggy.yield * totalFactor;
  } else return veggy.yield;
};

const getYieldForCrop = (input, env) => {
  if (env) {
    let totalFactor = 1;
    if (env.sun) {
      const valueSun = env.sun;
      if (input.crop.factor.sun) {
        const percSun = input.crop.factor.sun[valueSun];
        totalFactor = totalFactor * (1 + percSun / 100);
      }
    }
    if (env.wind) {
      const valueWind = env.wind;
      if (input.crop.factor.wind) {
        const percWind = input.crop.factor.wind[valueWind];
        totalFactor = totalFactor * (1 + percWind / 100);
      }
    }
    if (env.temp) {
      const valueTemp = env.temp;
      if (input.crop.factor.temp) {
        const percTemp = input.crop.factor.temp[valueTemp];
        totalFactor = totalFactor * (1 + percTemp / 100);
      }
    }
    return input.numCrops * input.crop.yield * totalFactor;
  } else return input.numCrops * input.crop.yield;
};

const getTotalYield = (object_veg, env) => {
  let sum = 0;
  let i = 0;
  // console.log(object_veg.crops.length);
  for (i = 0; i < object_veg.crops.length; i++) {
    if (env) {
      let totalFactor = 1;
      if (env.sun) {
        const valueSun = env.sun;

        if (object_veg.crops[i].crop.factor.sun) {
          const percSun = object_veg.crops[i].crop.factor.sun[valueSun];
          //          console.log("totalfactor voor", totalFactor);
          totalFactor = totalFactor * (1 + percSun / 100);
          //          console.log("totalfactor na", totalFactor);
        }
      }
      if (env.wind) {
        const valueWind = env.wind;
        if (object_veg.crops[i].crop.factor.wind) {
          const percWind = object_veg.crops[i].crop.factor.wind[valueWind];
          //          console.log("totalfactor voor", totalFactor);
          totalFactor = totalFactor * (1 + percWind / 100);
          //           console.log("totalfactor na", totalFactor);
        }
      }
      if (env.temp) {
        const valueTemp = env.temp;
        if (object_veg.crops[i].crop.factor.temp) {
          const percTemp = object_veg.crops[i].crop.factor.temp[valueTemp];
          //           console.log("totalfactor voor", totalFactor);
          totalFactor = totalFactor * (1 + percTemp / 100);
          //         console.log("totalfactor na", totalFactor);
        }
      }

      sum +=
        object_veg.crops[i].crop.yield *
        totalFactor *
        object_veg.crops[i].numCrops;
      //      console.log("sum is: ", sum)
    }
  }
  return sum;
};

const getCostsForCrop = (input) => {
  return input.numCrops * input.crop.cost;
};

const getRevenueForCrop = (input, env) => {
  if (env) {
    let totalFactor = 1;
    if (env.sun) {
      const valueSun = env.sun;
      if (input.crop.factor.sun) {
        const percSun = input.crop.factor.sun[valueSun];
        totalFactor = totalFactor * (1 + percSun / 100);
      }
    }
    if (env.wind) {
      const valueWind = env.wind;
      if (input.crop.factor.wind) {
        const percWind = input.crop.factor.wind[valueWind];
        totalFactor = totalFactor * (1 + percWind / 100);
      }
    }
    if (env.temp) {
      const valueTemp = env.temp;
      if (input.crop.factor.temp) {
        const percTemp = input.crop.factor.temp[valueTemp];
        totalFactor = totalFactor * (1 + percTemp / 100);
      }
    }
    return input.numCrops * input.crop.yield * totalFactor * input.price;
  } else return input.numCrops * input.crop.yield;
};
 // return input.numCrops * input.crop.yield * input.price;


const getProfitForCrop = (input, env) => {
  const getRevenue = getRevenueForCrop(input, env);
  return (
    getRevenue -
    input.numCrops * input.crop.cost
  );
};

const getTotalProfit = (object_veg) => {
  for (x in object_veg) {
    let sum = 0;
    let i = 0;
    for (i = 0; i < object_veg.crops.length; i++) {
      sum +=
        object_veg.crops[i].crop.yield *
          object_veg.crops[i].numCrops *
          object_veg.crops[i].price -
        object_veg.crops[i].numCrops * object_veg.crops[i].crop.cost;
    }
    return sum;
  }
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
