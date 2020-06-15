const dao = require("../../Dao/bok/getArticleDao");

function getArticleSer(request, response, callBack) {
    dao.getArticleDao( (data) => {
        callBack({type: "ok", data: data})
    } );
}
module.exports.getArticleSer = getArticleSer;