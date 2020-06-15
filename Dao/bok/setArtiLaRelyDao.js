const connect = require("../connectMySQL");

function setArticleLabelRelyDao(label, articleId, callBack) {
    const instruction = "insert into article_label_rely (`label`, `articleId`) values (?, ?)";
    const arr = [label, articleId];
    const connection = connect();
    connection.connect();
    connection.query(instruction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } )
}

module.exports.setArticleLabelRelyDao = setArticleLabelRelyDao;