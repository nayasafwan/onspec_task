const mysql = require('mysql2/promise');
const config = require("./config")




async function query(sql, params) {
    const connection = await mysql.createConnection(config);
    try{
        const [results] = await connection.query(sql, params);
        return results;
    }
    catch(err){
        console.error(`Failed to connect to db ${err}`)
    } 
}



module.exports = query