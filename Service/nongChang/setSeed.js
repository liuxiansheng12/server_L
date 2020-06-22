
const mysqlSetSeed = require("../../Dao/nongChang/setSeed");


function setSeed(request, response, callBack) {

    request.on("data", (data) => {
        console.log(data);
        const pathData = JSON.parse(data);
        const seed = JSON.stringify(pathData.seed);
        console.log(pathData, seed);

        mysqlSetSeed(pathData.name, seed, callBack);
    })
    
}

module.exports = setSeed;