const connect = require("../connectMySQL");

// 获取最新的每日一句的数据
function getEveryDayDao(callBack) {
    const instruction = "select * from every_day order by id desc limit 1";
    // 创建联系
    const connection = connect();
    connection.connect();
    connection.query(instruction, (err, data) => {
        
        connection.end();

        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.getEveryDayDao = getEveryDayDao;
