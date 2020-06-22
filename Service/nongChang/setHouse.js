
const mysqlSetHouse = require("../../Dao/nongChang/setHouse");


function setHouse(request, response, callBack) {

    request.on("data", (d) => {
        const data = d.toString();
        const pathData = JSON.parse(data);
        const house = JSON.stringify(pathData.house);
        mysqlSetHouse(pathData.name, house, callBack);
    })
    
}


module.exports = setHouse;