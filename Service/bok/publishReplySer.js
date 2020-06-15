const url = require("url");
const tool = require("../tool");
const dao = require("../../Dao/bok/publishReplyDao");

function publishReplySer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const time = tool.getDate();
    dao.publishReplyDao(pathData.userName, pathData.replyName, 
            +pathData.commentId, pathData.replyContent, +pathData.articleId, time, () => {
        callBack({type: "ok"})
    })
}

module.exports.publishReplySer = publishReplySer;