const connect = require("../connectMySQL");

function getArticleDao (callBack) {
    const instruction = 'select * from article_list';
    const connection = connect();
    connection.connect();
    connection.query(instruction, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } );
}

module.exports.getArticleDao = getArticleDao;