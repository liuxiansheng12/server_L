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


// const req = require("request");


// module.exports = function () {

//     return {
//         connect() {},
//         end() {},
//         query(str, arr, callBack) {
//             req({
//                 url: "http://127.0.0.1:12345/operation",
//                 method: "POST",
//                 body: JSON.stringify({
//                     zhi: str,
//                     arr: arr
//                 })
//             }, (err, resq, body) => {
//                 if(!err) callBack( JSON.parse(body) );
//             })
//         }
//     }
// }