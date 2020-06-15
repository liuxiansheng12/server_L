const url = require("url");
const tool = require("../tool");
const dao = require("../../Dao/bok/publishMessageReplyDao");

function publishMessageReplySer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const time = tool.getDate();
    dao.publishMessageReplyDao(pathData.userName, pathData.replyName, 
            +pathData.messageId, pathData.replyContent, time, () => {
        callBack({type: "ok"})
    })
}

module.exports.publishMessageReplySer = publishMessageReplySer;