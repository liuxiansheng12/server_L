const connect = require("../connectMySQL");

function getMessageDao(callBack) {
    const instryction = 'select * from message order by time desc';
    const connection = connect();
    connection.connect();
    connection.query(instryction, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

function getMessageReplyDao(callBack) {
    const instryction = 'select * from message_reply';
    const connection = connect();
    connection.connect();
    connection.query(instryction, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.getMessageReplyDao = getMessageReplyDao;
module.exports.getMessageDao = getMessageDao;