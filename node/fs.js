
module.exports = {

  test: function () {
    this.loadfile("./data/fs_data.json");       
  },
  loadfile: function(filename) {    
    console.log("load file begin", filename)
    const fs = require('fs');

    try {
      const jsonString = fs.readFileSync(filename)
      const json = JSON.parse(jsonString);
      console.log("json", json) // 
    } catch (err) {
      console.log(err)
      return
    }

    console.log("load file end")  
  }  


}
