const connect = require("../connectMySQL");

function getCommentDao(articleId, callBack) {
    const instryction = 'select * from comment where articleId = ? order by time desc';
    const arr = [articleId];
    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.getCommentDao = getCommentDao;