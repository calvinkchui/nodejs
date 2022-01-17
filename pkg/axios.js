
module.exports = {
   test: async function() {
    console.log("testAxios()")
 const axios = require('axios');
     
  //await yahoo(axios);
  await queryString01( axios);
  await queryString02( axios);
  console.log("testAxios() end")
   }
}

async function yahoo( axios) {
  console.log('get yahoo:'); 
 
  axios.get('http://www.yahoo.com')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

// QueryString
async function queryString02( axios) {
  console.log('get queryString02.data:'); 

  axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {  });
}

// QueryString - array
async function queryString01( axios) {
  console.log('get queryString01.data:'); 

  axios.get('https://postman-echo.com/get?foo1=bar1&foo1=bar2')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {  });
}