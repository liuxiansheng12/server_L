const connect = require("../connectMySQL");

function getSpesificArticleDao(articleId, callBack) {
    const instryction = "select * from article_list where id = ?";
    const arr = [+articleId];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.getSpesificArticleDao = getSpesificArticleDao;