const validateLinks = require('../components/validateLinks.js');
const getStats = require("../components/getStats.js");
const getBroken = require("../components/getBrokenLinks.js");
const {arr, arrStats, stats} = require('./mockdata.js');
// jest.mock("node-fetch")

describe('validate links', () => {

  test('validateLinks should be a function', () => {
    expect(typeof validateLinks).toBe('function');
    expect(typeof validateLinks).not.toBe('string');
  });

// trabajar el test como una promesa 
//No es necesario usar una biblioteca para mockear fetch
//mockear fetch como createaccount o alguna otra función de firebase
// 
  test('validateLinks should resolves an array', () => {
    return (validateLinks(arr)).then((results) => {
      expect(results).toEqual(arrStats)
    })
  });
});

describe('stats', () => {

  test('getStats should be a function', () => {
    expect(typeof getStats).toBe('function');
    expect(typeof getStats).not.toBe('string');
  });

  // test.only('should return an string with stats', () => {
  //   return (getStats(arrStats)).then((results) => {
  //     expect(results).toEqual(stats)
  //   })
  // });

  test('getBroken should be a function', () => {
    expect(typeof getBroken).toBe('function');
    expect(typeof getBroken).not.toBe('string');
  });
});


  
