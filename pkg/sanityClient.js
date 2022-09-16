// https://www.npmjs.com/package/@sanity/client
module.exports = {
  
  // Setup
  setupSandbox: function() {
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
      projectId: '171wbjx0',
      dataset: 'production',
      apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
      token: 'skH0YrDpHXXXmX306RuMEo1OP9olOr03w3zewmIu5HRrOecGRCO6nr9wpEvriVtGM5j51IMbAV8xqMr0kkuPt7A7hj8VQzJDs1mFDy9qnIJqu1gesL1OMTg8k4uN5TXu5bjkvYSoxeSJNu84RUmOwQPP9VuvT0LrVT08ZrdquQZfsaOWkhzm', // sanity-auth-token or leave blank for unauthenticated usage
      useCdn: false, // `false` if you want to ensure fresh data
    })
  
    return client;
  },
  
  // Query 
  queryAllSimpleType: function(client) {
    const query = '*[_type == "simpleType"]'
    // {_id, title}
    const params = {}
  
    client.fetch(query, params).then((items) => {
      console.log('simpleType:')
      items.forEach((item) => {
        console.log(`[${item._id}]`);
        console.log(item);
      })
    })
  },
  
  query: function(client, query, params) {
    //const query = '*[_type == "simpleType"]'
    // {_id, title}
   // const params = {}
  
    client.fetch(query, params).then((items) => {
      items.forEach((item) => {
        console.log(`[${item._id}]:`);
        console.log(item);
      })
    })
  },
  
  // Create
  create: function(client, type, data) {
  
    const doc = Object.assign({_type: type} , data);
  
    client.create(doc).then((res) => {
      console.log(`[${type}] was created, document ID is ${res._id}`)
    })
  },
  
  // Update
  updateSimpleType: function(client, docId, data) {
  
  var desc = "#API - updated @" + Date();
  client
    .patch(docId) // Document ID to patch
    .set( 
      Object.assign({ description:  desc}, data)
    ) // Shallow merge  
    .commit() // Perform the patch and return a promise
    .then((updatedDoc) => {
      console.log('Updated document:')
      console.log(updatedDoc)
    })
    .catch((err) => {
      console.error('Oh no, the update failed: ', err.message)
    })
  
  },
  
  // ---------------------------------------------------------------
  test: function() {
     console.log("test - setup:", new Date())
    var client = this.setupSandbox();
    
    //this.demo01(client);
     console.log("test - demoMedia01:")
    this.demoMedia01(client);
  },
  
  
  
    
  demo01: function(client) {
    //var client = this.setupSandbox();
  
    // INSERT  
    /*
    var insertData = { title: "Create by API " + new Date().toISOString(), textContent: "#API" };
    //this.create( client, 'simpleType', insertData );    
  
    var insertDataWithId = Object.assign({ _id: "API-001"},  insertData);
    //this.createSimpleType( client, insertDataWithId );    
  
    // UPDATE
    this.updateSimpleType(client, "bhZvyT1LVCoAMLZNbXroVo", { });
    // SELECT
    this.queryAllSimpleType(client);  
  */
    //
  
  },
  
  demoMedia01: function(client) {
    console.log("demoMedia01:")

    // SELECT
    this.query(client, "*[_type == 'media'][0..0]", {}); 

    this.query(client, "*[_type == 'media']{_id, title, image }[0..0]", {}); 
    
  }

}
