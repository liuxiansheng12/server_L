const connect = require("../connectMySQL");

function publishMessageReplyDao(userName, replyName, messageId, replyContent, time, callBack) {
    const instryction = 'insert into message_reply (`userName`, `replyName`, `messageId`, `replyContent`, `time`) values (?, ?, ?, ? ,?)'
    const arr = [userName, replyName, messageId, replyContent, time];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.publishMessageReplyDao = publishMessageReplyDao;