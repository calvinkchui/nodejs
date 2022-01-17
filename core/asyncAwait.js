
module.exports = {
  test: function() {
    var functionName = "asyncAwait";
    console.log("test " + functionName + "() begin")

    // 
    test1();
    test2();

    console.log("test " + functionName + "() end")
  }

}


// Refer https://alligator.io/js/async-functions/
function test1() {            
    function scaryClown() {
      return new Promise(resolve => {
        setTimeout(() => {
          // call resolve() when complete
          resolve('🤡'); 
        }, 2000);
      });
    }

    async function msg() {
      const msg = await scaryClown();
      console.log('#1 Message:', msg);
      return msg;
    }

    msg(); // Message: 🤡 <-- after 2 seconds
    //
    scaryClown().then( result => {
       console.log("#1 msg().then(): " + result);
    });

}

// https://medium.com/hackernoon/async-await-essentials-for-production-loops-control-flows-limits-23eb40f171bd
// async function {funcName}
// await {funcName}

// Notes: cannot invoke await in .forEach()?
async function test2() {
  const immediatePromise = 
     () => new Promise((resolve) => setImmediate(resolve));
const timeoutPromise = 
     (timeout) => new Promise((resolve) => setTimeout(() => {
          resolve(timeout);
     }, timeout));

  let items = [ 10,20,30 ]; 
  for (let i = 0; i < items.length; i++) {
      const result = await timeoutPromise(1000);
      console.log("#2 [" + items[i] + "] " + result);
  }
  
}