const url = require("url");
const dao = require("../../Dao/bok/getSpesificArticleDao");


function getSpesificArticleSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;

    dao.getSpesificArticleDao(pathData.articleId, (data) => {
        callBack({
            type: "ok",
            data: data
        });
    } )
}

module.exports.getSpesificArticleSer = getSpesificArticleSer;