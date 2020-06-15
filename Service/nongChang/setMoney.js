
const mysqlSetMoney = require("../../Dao/nongChang/setMoney");


function setMoney(request, response, callBack) {

    request.on("data", (data) => {
        const pathData = JSON.parse(data);
        mysqlSetMoney(pathData.name, +pathData.money, callBack);
    })
    
}

module.exports = setMoney;