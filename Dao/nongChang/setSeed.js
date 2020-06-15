const connect = require("../connectMySQL");

// 根据name进行获取所有土地的信息
function setSeed(name, seed, callBack) {
    const instryction = "update xinXi set seed = ? where name = ?";
    const arr = [seed, name];

    const connection = connect("nongchang");
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(err) console.log(err);
        else callBack();
    } )
}

module.exports = setSeed;