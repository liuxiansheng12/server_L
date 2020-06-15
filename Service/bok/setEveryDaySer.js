
const dao = require("../../Dao/bok/setEveryDayDao");
const tool = require("../tool");

function setEveryDaySer(require, response, callBack) {
    require.on("data", (k) => {
        const data = JSON.parse(k.toString());
        const time = tool.getDate();

        // 向数据库中写数据函数
        dao.setEveryDayDao(data.everyDay, data.authorName, time, (data) => {
            callBack({type: "ok"});
        } );
    } )
}


module.exports.setEveryDaySer = setEveryDaySer;