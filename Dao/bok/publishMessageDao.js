const connect = require("../connectMySQL");

function publishMessageDao(userName, message, time, callBack) {
    const instryction = 'insert into message (`userName`, `message`, `time`) values (?, ?, ?)'
    const arr = [userName, message, time];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.publishMessageDao = publishMessageDao;