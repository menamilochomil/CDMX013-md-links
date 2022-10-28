const validateLinks = require('../components/validateLinks.js');
const getStats = require("../components/getStats.js");
const getBroken = require("../components/getBrokenLinks.js");
const {arr, arrStats, arrFail, arrStatsFail, stats} = require('./mockdata.js');
// jest.mock("node-fetch")
describe('mdLinks', () => {

  test('validateLinks should be a function', () => {
    expect(typeof validateLinks).toBe('function');
    expect(typeof validateLinks).not.toBe('string');
  });

// trabajar el test como una promesa 
//No es necesario usar una biblioteca para mockear fetch
//mockear fetch como createaccount o alguna otra función de firebase
// 
  test('validateLinks should resolves an array with status 200', () => {
    return (validateLinks(arr)).then((results) => {
      expect(results).toEqual(arrStats)
    })
  });

  test('validateLinks should resolves an array with status different to 200', () => {
    return (validateLinks(arrFail)).then((results) => {
      expect(results).not.toEqual(arrStatsFail)
    })
  });

  test('getStats should be a function', () => {
    expect(typeof getStats).toBe('function');
    expect(typeof getStats).not.toBe('string');
  });

  // test('getStats should show info', () => {
  //   return (getStats(arrStats)).then((results) => {
  //     expect(results).toEqual(arrStats)
  //   })
  // });

  test('getBroken should be a function', () => {
    expect(typeof getBroken).toBe('function');
    expect(typeof getBroken).not.toBe('string');
  });
});

  
