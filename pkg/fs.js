
module.exports = {
   test: function() {
    console.log("fs.test()")
  const fs = require('fs');
   
try {
  const jsonString = fs.readFileSync('./pkg/fs_data.json')  
  const customer = JSON.parse(jsonString);
  console.log(customer) // 

  //let jsout = JSON.stringify(customer, null, 2);
  //fs.writeFileSync('./pkg/fs_out.txt', jsout, { mode: 0o755 });

} catch(err) {
  console.log(err)
  return
}

  console.log("fs.test() end")
   }
}
