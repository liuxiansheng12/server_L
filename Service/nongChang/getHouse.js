
const mysqlGetHouse = require("../../Dao/nongChang/getHouse");
const url = require("url");


function getHouse(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    mysqlGetHouse(pathData.name, (data) => {
        chuLi(data, callBack);
    });
}

function chuLi(data, callBack) {
    if( !data || data.length == 0) callBack( JSON.stringify({type: 'no'}) )
    else {
        const house = JSON.parse( data[0].house );
        callBack( JSON.stringify({type: 'ok', data: house}) )
    }
}

module.exports = getHouse;