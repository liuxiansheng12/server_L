const url = require("url");
const dao = require("../../Dao/bok/articleClicksIncreaseDao");

function articleClicksIncreaseSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    
    dao.articleClicksIncreaseDao(pathData.articleId, (data) => {
        callBack({type: "ok"})
    } )

}

module.exports.articleClicksIncreaseSer = articleClicksIncreaseSer;