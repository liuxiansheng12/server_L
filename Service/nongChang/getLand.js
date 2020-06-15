
const mysqlGetLand = require("../../Dao/nongChang/getLand");
const url = require("url");


function getLand(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    mysqlGetLand(pathData.name, (data) => {
        chuLi(data, callBack, pathData.index);
    });
}

function chuLi(data, callBack, index) {
    if( !data || data.length == 0) callBack( JSON.stringify({type: 'no'}) )
    else {
        const land = JSON.parse( data[0].land );
        const d = land[index];
        if( !d ) callBack( JSON.stringify({type: 'no'}) )
        else {
            callBack( JSON.stringify({type: 'ok', data: d}) )
        }
    }
}

module.exports = getLand;