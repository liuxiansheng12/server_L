const url = require("url");
const tool = require("../tool");
const dao = require("../../Dao/bok/publishMessageDao");

function publishMessageSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const time = tool.getDate();
    dao.publishMessageDao(pathData.userName, pathData.message, time, () => {
        callBack({type: "ok"})
    })
}

module.exports.publishMessageSer = publishMessageSer;