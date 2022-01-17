
module.exports = {
   testCheeio: function() {
    console.log("testCheeio()")
  const $ = require('cheerio');

  const html1 = `
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>
`
  $('.apple', html1).text() // Apple
  console.log("testCheeio() end")
   }
}
