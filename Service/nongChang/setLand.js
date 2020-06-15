
const mysqlSetLand = require("../../Dao/nongChang/setLand");
const mysqlGetLand = require("../../Dao/nongChang/getLand");
const mysqlAddUserInfor = require("../../Dao/nongChang/addUserInfor");


function setLand(request, response, callBack) {

    request.on("data", (data) => {
        const pathData = JSON.parse(data);
        // 首先获取到所有的土地数据
        mysqlGetLand(pathData.name, (data) => {
            chuLi(data, pathData, callBack);
        });
    })
    
}

function chuLi(data, pathData, callBack) {
    let d = new Array(15);
    
    if( data.length > 0 ) {
        const landAgg = JSON.parse( data[0].land );
        d = landAgg;
    }
    d[pathData.index] = JSON.parse( pathData.land );
    
    const land = JSON.stringify(d);
    const house = JSON.stringify([]);
    const seed = JSON.stringify([]);

    if(data.length == 0) mysqlAddUserInfor(pathData.name, land, seed, house, 500, callBack)
    else mysqlSetLand(pathData.name, land, callBack);
}

module.exports = setLand;