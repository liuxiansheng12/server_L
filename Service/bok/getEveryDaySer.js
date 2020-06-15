const dao = require("../../Dao/bok/getEveryDayDao");


function getEveryDaySer(callBack) {
    // 获取对应的数据
    dao.getEveryDayDao((data) => {
        callBack(data[0]);
    } );
}

module.exports.getEveryDaySer = getEveryDaySer;