
const mysqlSetHouse = require("../../Dao/nongChang/setHouse");


function setHouse(request, response, callBack) {

    request.on("data", (data) => {
        const pathData = JSON.parse(data);
        mysqlSetHouse(pathData.name, pathData.house, callBack);
    })
    
}


module.exports = setHouse;