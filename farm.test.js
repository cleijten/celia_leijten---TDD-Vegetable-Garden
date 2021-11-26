const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

//get yield per plant

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  const avocado = {
    name: "avocado",
    yield: 12,
    factor: {
      sun: {
        low: -70,
        medium: 0,
        high: 70,
      },

      wind: {
        low: 20,
        medium: -10,
        high: -50,
      },
    },
  };

  const environmentFactors = {
    sun: "low",
  };

  const environmentFactors2 = {
    sun: "high",
    wind: "medium",
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
  test("Get yield for corn with environment factor sun low", () => {
    expect(getYieldForPlant(corn, environmentFactors2)).toBe(45);
  });
  test("Get yield for corn with environment factor sun and wind", () => {
    expect(getYieldForPlant(avocado, environmentFactors2)).toBeCloseTo(18.36);
  });
});

// get yield per crop

describe("getYieldForCrop", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  const environmentFactors = {
    sun: "low",
  };

  const input = {
    crop: corn,
    numCrops: 10,
  };

  test("Get yield for crop, simple, 1 environment factor", () => {
    expect(getYieldForCrop(input, environmentFactors)).toBe(150);
  });
});

//calculate yield for all crops

describe("getTotalYield", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };

  const pumpkin = {
    name: "pumpkin",
    yield: 4,
    factor: {
      sun: {
        low: -30,
        medium: 0,
        high: 40,
      },
      temp: {
        low: -70,
        medium: -10,
        high: 60,
      },
    },
  };
  const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2 },
  ];

  

  const environmentFactors2 = {
    sun: "high",
    temp: "medium",
  };
  const environmentFactors3 = {
    sun: "medium",
    wind: "high",
    temp: "low",
  };

  test("Calculate total yield with multiple crops", () => {
    expect(getTotalYield({ crops }, environmentFactors2)).toBeCloseTo(235.08);
  });
    test("Calculate total yield with multiple crops v2", () => {
    expect(getTotalYield({ crops }, environmentFactors3)).toBeCloseTo(152.4);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];

    expect(getTotalYield({ crops })).toBe(0);
  });
});

// get costs per crop

describe("getCostsForCrop", () => {
  test("Calculate cost for a crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1.8,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getCostsForCrop(input)).toBe(18);
  });
});

//calculate revenue per crop

describe("getRevenueForCrop", () => {
      const corn = {
      name: "corn",
      yield: 30,
      cost: 1.8,
      factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  
   const pumpkin = {
    name: "pumpkin",
    yield: 4,
    factor: {
      sun: {
        low: -30,
        medium: 10,
        high: 40,
      },
      temp: {
        low: -70,
        medium: -10,
        high: 60,
      },
    },
  };

    const input = {
      crop: corn,
      numCrops: 10,
      price: 4,
  };

      const input2 = {
      crop: pumpkin,
      numCrops: 5,
      price: 8,
  };

   const environmentFactors2 = {
    sun: "high",
    temp: "medium",
  };
  const environmentFactors3 = {
    sun: "medium",
    wind: "high",
    temp: "low",
  };
  
  test("Calculate revenue for crop", () => {
    expect(getRevenueForCrop(input, environmentFactors2)).toBeCloseTo(1800);
  });
    test("Calculate revenue for crop", () => {
    expect(getRevenueForCrop(input2, environmentFactors3)).toBeCloseTo(52.8);
  });
});

//calculate profit per crop

describe("getProfitForCrop", () => {
  const corn = {
      name: "corn",
      yield: 30,
      cost: 1.8,
      factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  
   const pumpkin = {
    name: "pumpkin",
     yield: 4,
    cost: 3,
    factor: {
      sun: {
        low: -30,
        medium: 10,
        high: 40,
      },
      temp: {
        low: -70,
        medium: -10,
        high: 60,
      },
    },
  };

    const input = {
      crop: corn,
      numCrops: 10,
      price: 4,
    };

        const input2 = {
      crop: pumpkin,
      numCrops: 5,
      price: 8,
  };

   const environmentFactors2 = {
    sun: "high",
    temp: "medium",
  };
  const environmentFactors3 = {
    sun: "medium",
    wind: "high",
    temp: "low",
  };

  test("Calculate profit for crop", () => {
      expect(getProfitForCrop(input, environmentFactors2)).toBe(1782);
  });
    test("Calculate profit for crop", () => {
      expect(getProfitForCrop(input2, environmentFactors3)).toBeCloseTo(37.8);
  });
});

//calculate total profit for all crops

describe("getTotalProfit", () => {
  test("Calculate total profit for multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1.8,
    };

    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
    };
    const crops = [
      { crop: corn, numCrops: 10, price: 4 },
      { crop: pumpkin, numCrops: 2, price: 7 },
    ];

    expect(getTotalProfit({ crops })).toBe(152);
  });
});
