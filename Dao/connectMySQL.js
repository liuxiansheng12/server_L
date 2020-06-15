const mySql = require("mysql");
function connection(mysql = "bok") {
    return mySql.createConnection({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "abc123",
        database: mysql
    })
}
module.exports = connection;
