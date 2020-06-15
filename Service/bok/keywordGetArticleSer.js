const dao = require("../../Dao/bok/getArticleDao");
const url = require("url");

function keywordGetArticleSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query
    dao.getArticleDao( (data) => {

        // 创建文章与关键词关系的数据集合
        const d = xinJiHe(data, 0);
        // 建立文章与关键词的关系
        for(let i = 0; i < pathData.keyword.length; i ++) {
            // 拆出对应的子字符串
            const zi = ziStr(pathData.keyword, pathData.keyword.length - i);
            // 遍历拆出的子字符串，判断相同
            for(let j = 0; j < zi.length; j ++) {
                // 建立文章与关键词的信息集合
                keywordGuan(zi[j], d, {
                    chang: pathData.keyword.length - i,
                    index: j
                });
            }
        }

        // 筛选文章与关键词的数据集合，把符合条件的放在一个集合中推送给前端
        const arr = shaiXuan(d);

        callBack({
            type: "ok",
            data: arr
        });
    } )
}

// 得到指定长度的子字符串数组
function ziStr(str, length) {
    const arr = [];
    for(let i = 0; i <= str.length - length; i ++) {
        arr.push( str.substr(i, length) );
    }
    return arr;
}
// 根据所有的数据集合创建一个新的数据集合
function xinJiHe(data, i) {
    if(i === data.length ) return null;
    
    const obj = {};
    // 保存当前文章中，与最长字符串相同的长度，长的优先
    obj.chang = 0;
    // 最长字符串的位置，前面的优先
    obj.index = 0;
    // 重复了几次
    obj.ci = 0;
    // 保存数据
    obj.data = data[i];
    // 构建链表，进行迭代
    obj.lower = xinJiHe(data, i + 1);

    return obj;
}
// 确定每个文章与关键词的关系
function keywordGuan(keyword, k, obj) {
    if(!k) return;

    // 遍历文章数据集合，设置与关键词的关系
    // 查询标题
    if( k.data.title.indexOf( keyword ) > -1  || 
        k.data.article.indexOf( keyword ) > -1 ||
        k.data.label.indexOf( keyword ) > -1 ) 
    {
        if(k.chang < obj.chang) {
            k.chang = obj.chang;
            k.index = obj.index;
        }
        else if(k.index > obj.index) k.index = obj.index;
        k.ci += 1;
    }

    // 开始迭代
    keywordGuan(keyword, k.lower, obj);
}
// 筛选文章
function shaiXuan(data) {
    const arr = [];
    // 筛选出文章
    shai(data, arr);
    // 对筛选出的文章进行排序
    arr.sort( (k1, k2) => {
        if(k1.chang !== k2.chang) return k2.chang - k1.chang;
        else if( k1.ci !== k2.ci) return k2.ci - k1.ci;
        else return k1.index - k2.index;
    } );
    // 构建数组
    const aggre = [];
    for(let i = 0; i < arr.length; i ++) {
        aggre.push( arr[i].data );
    }
    return aggre;


    function shai(data, arr) {
        if(!data) return;
        if( data.chang > 0 ) arr.push(data);
        shai(data.lower, arr);
    }
}

module.exports.keywordGetArticleSer = keywordGetArticleSer;