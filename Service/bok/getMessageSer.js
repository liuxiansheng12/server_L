const dao = require("../../Dao/bok/getMessageDao");

function getMessageSer(request, response, callBack) {
    // 获取对应的数据
    dao.getMessageDao( (message) => {
        // 然后获取当前文章的所有回复
        dao.getMessageReplyDao( (reply) => {
            // 遍历所有的评论，把响应的回复，存放到对应的评论数据集合中
            for(let i = 0; i < message.length; i ++) {
                message[i].reply = [];
                for(let j = 0; j < reply.length; j ++) {
                    if(reply[j].messageId == message[i].id) {
                        message[i].reply.push(reply[j]);
                    }
                }
            }
            callBack({
                type: "ok",
                data: message
            });
        } );
    } );
}

module.exports.getMessageSer = getMessageSer;