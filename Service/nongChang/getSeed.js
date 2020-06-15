
const mysqlGetSeed = require("../../Dao/nongChang/getSeed");
const url = require("url");


function getSeed(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    mysqlGetSeed(pathData.name, (data) => {
        chuLi(data, callBack);
    });
}

function chuLi(data, callBack) {
    if( !data || data.length == 0) callBack( JSON.stringify({type: 'no'}) )
    else {
        const seed = JSON.parse( data[0].seed );
        callBack( JSON.stringify({type: 'ok', data: seed}) )
    }
}

module.exports = getSeed;