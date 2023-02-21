window.excelConstants = {
  failReward: {
    multiplier: 0.6,
    interval: 4,
    regulation: 0.9,
  },
  powerButtonPrice: {
    base: 6,
    multiplier: 1.5,
    interval: 6,
    regulation: 1.1,
    last: 5,
  },
  incomeButtonPrice: {
    base: 4,
    multiplier: 1.5,
    interval: 6,
    regulation: 1.1,
    last: 5,
  },
  winReward: {
    base: 15,
    multiplier: 4.5,
    interval: 5,
    regulation: 0.9,
    last: 10,
  },
  incomeMultiplier: {
    base: 1,
    increment: 0.053,
  },
  blockHealth: {
    base: 24,
    increment: 16.5,
    interval: 6,
    regulation: 0.97,
    last: 50,
    levelRegulations: {
      10: 0.8,
      14: 0.9,
      16: 0.97,
      17: 0.95,
      20: 0.9,
      28: 0.9,
    },
  },
  bulletPower: {
    base: 9,
    increment: 2.1,
  },
  mapDensity: {
    first: 130,
    increment: 15,
    max: 170,
    min: 200,
  },
  booster: {
    densityInterval: [2, 4],
    blockRates: [1, 4, 8], // blockların üzerinde cıkma ihtimalleri
  },
  map: {
    layerRatesBase: [3, 57, 35, 5],
    layerRateIncrements: [0, 3, 5.9, 2.2, 0.8], //10 levelde max
    layerRates: [4, 75, 30, 10], // ilk değer kırılamayan bloklar için //[4, 12, 8, 6],
  },
  constantLevelData: {
    1: {
      density: 83,
      layerRates: [0, 90, 5, 0],
    },
    2: {
      density: 95,
      layerRates: [0, 80, 20, 0],
    },
    3: {
      density: 105,
      layerRates: [0, 70, 25, 5],
    },
    "4_5": {
      density: 110,
      layerRates: [2, 70, 25, 3],
    },
    "6_8": {
      density: 125,
      layerRates: [5, 60, 30, 5],
    },
    "9_12": {
      density: 135,
      layerRates: [5, 55, 35, 5],
    },
    "13_20": {
      density: 145,
      layerRates: [8, 52, 32, 8],
    },
    "21_9999": {
      density: 155,
      layerRates: [8, 50, 34, 8],
    },
  },
};
