const connect = require("../connectMySQL.js");

// 与数据库通信的方法，向每日一句中添加一句话
function setEveryDayDao(everyDay, authorName, time, callBack) {
    // 定义指令
    const instruction = 'insert into every_day (`everyDay`, `authorName`, `time`) values (?, ?, ?)';
    const arr = [everyDay, authorName, time];
    // 连接数据库
    const connection = connect();
    // 启动通信接口
    connection.connect();
    // 进行通信
    connection.query(instruction, arr, (err, data) => {
        // 关闭通信接口
        connection.end();

        if(!err) callBack(data);
        else console.log(err);
    } )
}


module.exports.setEveryDayDao = setEveryDayDao;