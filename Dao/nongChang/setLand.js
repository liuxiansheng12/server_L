const connect = require("../connectMySQL");

// 根据name进行获取所有土地的信息
function setLand(name, land, callBack) {
    const instryction = "update xinxi set land = ? where name = ?";
    const arr = [land, name];

    const connection = connect("nongchang");
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(err) console.log(err);
        else callBack();
    } )
}

module.exports = setLand;
