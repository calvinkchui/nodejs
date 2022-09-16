
module.exports = {
   test: function() {
    console.log("sb20191005")
  const axios = require('axios');
  
/*
http://www.tvboxnow.com/forum-279-1.html
.subject

 http://www.aastocks.com/tc/mobile/News.aspx
*/
  axios.get('http://www.aastocks.com/tc/mobile/News.aspx')
  .then(function (response) {
    // handle success
    //console.log(response);

   const $ = require('cheerio');
   console.log( $("table.news_table td.bottom a", response.data).text()) 
   //console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(errora);
  })
  .finally(function () {
    // always executed
  });

  console.log("sb20191005 end")
   }
}
 