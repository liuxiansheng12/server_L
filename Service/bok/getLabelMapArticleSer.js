const url = require("url");
const daoGetArticle = require("../../Dao/bok/getArticleDao");

function getLabelMapArticleSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const article = [];
    // 获取所有的文章，然后在进行筛选
    daoGetArticle.getArticleDao( (data) => {
        for(let i = 0; i < data.length; i ++) {
            const articleAggre = data[i];
            if( articleAggre.label.indexOf(pathData.label) > -1 ) {
                article.push(articleAggre);
            }
        }
        callBack({
            type: "ok",
            data: article
        });
    } );
}

module.exports.getLabelMapArticleSer = getLabelMapArticleSer;