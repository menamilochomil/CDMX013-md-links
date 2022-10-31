const fetch = jest.fn(
    (x) => {
        if(x.includes("404") ){
           return Promise.resolve({status: 404})
        }
        return Promise.resolve({status: 200})
    }
);

//export default
module.exports = fetch;
