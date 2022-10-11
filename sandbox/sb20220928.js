

module.exports = {
    test: function () {        
        var jsonata = require('jsonata');
        const fs = require('fs');
       

        console.log("sb20191118")


        console.log("jsonfile.test() begin")
        const jsonfile = require('jsonfile');
         
        const data = jsonfile.readFileSync('./tmp/entries.json');
        var dataout = "";
        for( let i of data[2].data.filter( e => e.owner == '3' ) )
        {            
/*            
 {"id":"160","name":null,
"brand":"Triple crab",
  "model":"First extract fish sause 300g","category":null,"remark":"29.9@hkptu",
  "sn":null,"invcode":null,"location":null,
  "image":"invImage\/101_00000160.jpg","image_link":null,
"image_preview":"invImage\/thumb_101_00000160.jpg",
 "status":null,"price":null,"purchase_date":null,"expiry_date":null,
 "created_by":null,"updated_by":null,
 "created_at":"2020-07-14 03:30:11","updated_at":"2020-07-14 03:32:13",
 "owner_id":"4","users_permissions_user":null,"owner":"4"},            
*/ 
            var expression = jsonata(`{
  "_id": \`id\`,
  "name": \`name\`,
  "brand": \`brand\`,
  "model": \`model\`,
  "category": \`category\`,
  "remark": \`remark\`,
  "sn": \`sn\`,
  "locationRemark": \`location\`,
  "image": \`image\`,
  "imageUrl": \`image_link\`,
  "status": \`status\`,
  "purchaseDate": \`purchase_date\`,

  "expiryDate": \`expiry_date\`
}`);     
            var result = expression.evaluate(i);       
            
            console.log(result);

            dataout += JSON.stringify(result,  
              (key, value) => { if (value !== null && value !== "") return value }); ;

            dataout += "\r\n" ;

        }

        fs.writeFileSync("tmp/entries_out.txt", dataout);

        console.log("jsonfile.test() end")
    }

}