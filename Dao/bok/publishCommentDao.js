const connect = require("../connectMySQL");

function publishCommentDao(userName, comment, articleId, time, callBack) {
    const instryction = 'insert into comment (`userName`, `comment`, `articleId`, `time`) values (?, ?, ? ,?)'
    const arr = [userName, comment, articleId, time];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.publishCommentDao = publishCommentDao;