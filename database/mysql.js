const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
})

connection.connect((err) => {
    if(err){
      console.log(err);
    }
    console.log('mysql is connected!')
});



module.exports = connection.promise()