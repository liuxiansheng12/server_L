const daoArticle = require("../../Dao/bok/setArticleDao");
const daoGetLabel = require("../../Dao/bok/getLabelDao");
const daoSetLabel = require("../../Dao/bok/setLabelDao");
const daoArticleLabelRely = require("../../Dao/bok/setArtiLaRelyDao");
const tool = require("../tool");

function setArticleSer(request, response, callBack) {
    request.on( "data", (k) => {
        // 解析对应的数据
        const data = JSON.parse( k.toString() );
        
        const time = tool.getDate();
        const label = data.label.split(" ");

        // 刚开始时，点击量为0
        daoArticle.setArticleDao(data.title, data.article, time, 0, data.label, (data) => {
            // 添加完文章后，还需要添加标签和标签依赖
            setLabel( label, data );
            // 添加标签与文章的依赖
            setLabelArticleRely(label, data.insertId);

            callBack({type: "ok"});
        } );
    } )
}



// 添加标签的函数
function setLabel(data, articleData) {
    for(let i = 0; i < data.length; i ++) {
        // 发送通信，获取对应的标签数据
        daoGetLabel.getLabelDao(data[i], (k) => {
            // 没有该标签，加入对应的标签
            if(k == null || k.length === 0) {
                // 加入标签
                daoSetLabel.setLabelDao(data[i], (k) => {
                })
            }
        } )
    }
}

// 添加标签与文章的依赖
function setLabelArticleRely(data, insertId) {
    for(let i = 0; i < data.length; i ++) {
        // 向数据库中添加数据
        daoArticleLabelRely.setArticleLabelRelyDao(data[i], insertId, (data) => {
        } );
    }
    
}

module.exports.setArticleSer = setArticleSer;