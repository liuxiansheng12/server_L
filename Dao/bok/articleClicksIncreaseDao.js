const connect = require("../connectMySQL");

// 得到之前的点击量，进行递增
function articleClicksIncreaseDao(articleId, callBack) {
    const instryction = 'select * from article_list where id = ?';
    const arr = [+articleId];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) {
            clicksIncrease(data[0].clicks + 1, articleId, callBack)
        }
        else console.log(err);
    } )
}
function clicksIncrease(clicks, articleId, callBack) {
    const instryction = 'update article_list set clicks = ? where id = ?';
    const arr = [clicks, +articleId];

    const connection = connect();
    connection.connect();
    connection.query(instryction, arr, (err, data) => {
        connection.end();
        if(!err) callBack(data);
        else console.log(err);
    } )
} 


module.exports.articleClicksIncreaseDao = articleClicksIncreaseDao;