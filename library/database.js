let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'backend-instance-1-ap-southeast-2a.caxrajgkzonh.ap-southeast-2.rds.amazonaws.com',
   user:        'admin',
   password:    'admin123',
   database:    'member'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection; 