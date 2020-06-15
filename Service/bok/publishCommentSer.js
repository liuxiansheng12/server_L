const url = require("url");
const tool = require("../tool");
const dao = require("../../Dao/bok/publishCommentDao");

function publishCommentSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const time = tool.getDate();
    dao.publishCommentDao(pathData.userName, pathData.comment, +pathData.articleId, time, () => {
        callBack({type: "ok"})
    })
}

module.exports.publishCommentSer = publishCommentSer;