const fetch = jest.fn(
    () => Promise.resolve({status: 200})
);

//export default
module.exports = fetch;
