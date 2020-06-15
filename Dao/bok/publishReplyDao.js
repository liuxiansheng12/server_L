const connect = require("../connectMySQL");

function publishReplyDao(userName, replyName, commentId, replyContent, articleId, time, callBack) {
    const instryction = 'insert into reply (`userName`, `replyName`, `commentId`, `replyContent`, `articleId`, `time`) values (?, ?, ?, ?, ? ,?)'
    const arr = [userName, replyName, commentId, replyContent, articleId, time];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.publishReplyDao = publishReplyDao;