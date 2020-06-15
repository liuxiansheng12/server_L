const service = require("../../../Service/wuZiQi/luoZiSer");
const tool = require("../../tool");


const get = new Map();


function luoZi(request, response) {
    
    service.luoZi(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );

}
get.set("wuZiQi/luoZi", luoZi);

module.exports.get = get;