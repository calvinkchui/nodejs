
module.exports = {
   test: function() {
    console.log("env.test()")
 
    //https://www.twilio.com/blog/working-with-environment-variab
    // #1
    console.log("process.env", process.env); 

    // #2
    const PORT = process.env.PORT || 3000;
    console.log("port with default 3000", PORT); 

    const PORT2 =  process.env['PORT2'] || 3000;
    console.log("port2", PORT2); 

    let config = {
      port: process.env['PORT2'] || 3000
    }
    console.log("config", config); 
   }
}
