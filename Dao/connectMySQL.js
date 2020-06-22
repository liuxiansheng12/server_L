const mySql = require("mysql");
function connection(mysql = "bok") {
    return mySql.createConnection({
        // host: "jdbc:mysql://rm-8vb5qyx9m5lur7ditto.mysql.zhangbei.rds.aliyuncs.com",
        host: "rm-8vb5qyx9m5lur7ditto.mysql.zhangbei.rds.aliyuncs.com",
        port: "3306",
        user: "a123456a",
        password: "A19960603",
        database: mysql
    })
}
module.exports = connection;


