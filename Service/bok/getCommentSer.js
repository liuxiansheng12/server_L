const daoComment = require("../../Dao/bok/getCommentDao");
const daoReply = require("../../Dao/bok/getReplyDao");
const url = require("url");

function getCommentSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query
    // 获取对应的数据
    daoComment.getCommentDao(+pathData.articleId, (comment) => {
        // 然后获取当前文章的所有回复
        daoReply.getReplyDao(+pathData.articleId, (reply) => {
            // 遍历所有的评论，把响应的回复，存放到对应的评论数据集合中
            for(let i = 0; i < comment.length; i ++) {
                comment[i].reply = [];
                for(let j = 0; j < reply.length; j ++) {
                    if(reply[j].commentId == comment[i].id) {
                        comment[i].reply.push(reply[j]);
                    }
                }
            }
            callBack({
                type: "ok",
                data: comment
            });
        } );
    } );
}

module.exports.getCommentSer = getCommentSer;