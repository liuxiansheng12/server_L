
const mysqlGetMoney = require("../../Dao/nongChang/getMoney");
const url = require("url");

function getMoney(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    mysqlGetMoney(pathData.name, (data) => {
        chuLi(data, callBack);
    });
}

function chuLi(data, callBack) {
    if( !data || data.length == 0) callBack( JSON.stringify({type: 'no'}) )
    else {
        const money = JSON.parse( data[0].money );
        callBack( JSON.stringify({type: 'ok', data: money}) )
    }
}

module.exports = getMoney;