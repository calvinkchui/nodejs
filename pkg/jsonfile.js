
module.exports = {
   test: function() {

  console.log("jsonfile.test() begin")
  const jsonfile = require('jsonfile');
   
  const customer = jsonfile.readFileSync('./pkg/fs_data.json');
  console.log(customer);
  
  console.log("jsonfile.test() end")
   }
}