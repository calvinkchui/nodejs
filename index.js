
// Test @2022-09-28

// -----------------------------------------
// work in process
///const sum = require('./pkg/jest-sample');
//test('add 1+2 = 3', () => {
//  expect(sum(1,2).toBe(3));
//})

// -----------------------------------------
//const asyncAwait = require('./core/asyncAwait');
//asyncAwait.test();

//const es6 = require('./core/es6');
//es6.test();

// Problem - 1
//import importFx from "./core/importExport.mjs";
//importFx.test();
// Error : SyntaxError: Cannot use import statement outside a module

// Problem - 2
/*
(async () => {
  //try {
    console.log("imported-1");

//    await import('./core/importExport.mjs')
//     .then(obj => obj.test())
//     .catch(err => console.log(err))
     
     let x = await import('./core/importExport'); // add "type": "modules",
     console.log("imported-2");
  //} catch(e) {
  //  throw new Error(e);
  //}    
})();

console.log("done");
*/

// -----------------------------------------
//const cacheManager = require('./pkg/cacheManager');
//cacheManager.test();

// HTML Parser
//const cheerio = require('./pkg/cheerio');
//cheerio.testCheeio();

// HTTP request
//const axios = require('./pkg/axios');
//axios.test();

const fs = require('./node/fs.js');
fs.test();

//const jsonfile = require('./pkg/jsonfile');
//jsonfile.test();

// Log
//const winston = require('./pkg/winston');
//winston.test();

// .env
//const penv = require('./pkg/env');
//penv.test();


// Sanity
// @sanity/client
//const sanityClient = require('./pkg/sanityClient');
//sanityClient.test();
// -----------------------------------------
//const sb = require('./sandbox/sb20191005');
//sb.test();

//const sb = require('./sandbox/sb20191118');
//sb.test();
