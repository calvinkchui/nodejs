module.exports = {
    test: function () {
        console.log("sb20191118")


        console.log("jsonfile.test() begin")
        const jsonfile = require('jsonfile');
         
        const data = jsonfile.readFileSync('./tmp/entries.json');

        for( let i of data[2].data.filter( e => e.owner == '3' ) )
        {
            console.log(i)
        }
        
        console.log("jsonfile.test() end")
    }

}