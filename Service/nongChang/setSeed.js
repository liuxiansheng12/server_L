
const mysqlSetSeed = require("../../Dao/nongChang/setSeed");


function setSeed(request, response, callBack) {

    request.on("data", (data) => {
        const pathData = JSON.parse(data);
        mysqlSetSeed(pathData.name, pathData.seed, callBack);
    })
    
}

module.exports = setSeed;