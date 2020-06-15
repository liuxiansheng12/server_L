
const connect = require("../connectMySQL");

// 根据name进行获取所有土地的信息
function getMoney(name, callBack) {
    const instryction = 'select money from xinXi where name = ?';
    const arr = [name];

    const connection = connect("nongchang");
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) {
            callBack(data);
        }
        else console.log(err);
    } )
}


module.exports = getMoney;