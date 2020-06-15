const service = require("../../../Service/wuZiQi/getFenZhuoData");
const tool = require("../../tool");


const get = new Map();


function fenZhuo(request, response) {
    
    service.getFenZhuoData(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );

}
get.set("wuZiQi/fenZhuo", fenZhuo);

module.exports.get = get;