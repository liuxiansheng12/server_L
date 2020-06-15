const connect = require("../connectMySQL");

function getLatestCommentDao(nub, callBack) {
    const instryction = "select * from comment order by time desc limit ?";
    const arr = [nub];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } )
}

module.exports.getLatestCommentDao = getLatestCommentDao;