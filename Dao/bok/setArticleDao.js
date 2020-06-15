const connect = require("../connectMySQL");

function setArticleDao(title, article, time, clicks, label, callBack) {
    const instruction = "insert into article_list (`title`, `article`, `time`, `clicks`, `label`) values (?, ?, ?, ?, ?)";
    const arr = [title, article, time, clicks, label];
    const connection = connect();
    connection.connect();
    connection.query(instruction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    });
}

module.exports.setArticleDao = setArticleDao;