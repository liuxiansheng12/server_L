const connect = require("../connectMySQL");

// 根据name进行获取所有土地的信息
function setMoney(name, money, callBack) {
    const instryction = "update xinxi set money = ? where name = ?";
    const arr = [money, name];

    const connection = connect("nongchang");
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(err) console.log(err);
        else callBack();
    } )
}

module.exports = setMoney;