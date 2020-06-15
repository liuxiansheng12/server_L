const connect = require("../connectMySQL");

function getReplyDao(articleId, callBack) {
    const instryction = 'select * from reply where articleId = ?';
    const arr = [articleId];
    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.getReplyDao = getReplyDao;