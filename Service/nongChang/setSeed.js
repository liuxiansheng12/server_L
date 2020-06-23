
const mysqlSetSeed = require("../../Dao/nongChang/setSeed");


function setSeed(request, response, callBack) {

    request.on("data", (d) => {
        const data = d.toString();
        console.log(pathData.seed);
        console.log(typeof pathData.seed);
        const pathData = JSON.parse(data);
        const seed = JSON.stringify(pathData.seed);

        mysqlSetSeed(pathData.name, seed, callBack);
    })
    
}

module.exports = setSeed;