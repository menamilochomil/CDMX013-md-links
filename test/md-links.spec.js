const validateLinks = require('../components/validateLinks.js');
const {arr, arrStats} = require('./mockdata.js');
// jest.mock("node-fetch")
// const {enableFetchMocks} = require('jest-fetch-mock')
// enableFetchMocks(
describe('mdLinks', () => {

  test('should a function', () => {
    expect(typeof validateLinks).toBe('function');
    expect(typeof validateLinks).not.toBe('string');
  });

// trabajar el test como una promesa 
//No es necesario usar una biblioteca para mockear fetch
//mockear fetch como createaccount o alguna otra función de firebase
// 
  test('should a --validate', () => {
    return (validateLinks(arr)).then((results) => {
      expect(results).toEqual(arrStats)
    })
  });
});

  
