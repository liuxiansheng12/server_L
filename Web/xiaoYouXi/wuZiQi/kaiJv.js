const service = require("../../../Service/wuZiQi/kaiJvSer");
const tool = require("../../tool");


const get = new Map();


function kaiJv(request, response) {
    
    service.kaiJv(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );

}
get.set("wuZiQi/kaiJv", kaiJv);

module.exports.get = get;