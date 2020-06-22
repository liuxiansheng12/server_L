

const connect = require("../connectMySQL");

// 根据name进行获取所有土地的信息
function userInfor(name, land, seed, house, money, callBack) {
    const instryction = "insert into xinxi (`name`, `land`, `seed`, `house`, `money`) values (?, ?, ?, ?, ?)";
    const arr = [name, land, seed, house, money];
    
    const connection = connect("nongchang");
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(err) console.log(err);
        else callBack();
    } )
}


module.exports = userInfor;