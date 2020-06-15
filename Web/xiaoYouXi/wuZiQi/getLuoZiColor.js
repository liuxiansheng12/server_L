const service = require("../../../Service/wuZiQi/getLuoZiColor");
const tool = require("../../tool");


const get = new Map();


function getLuoZiColor(request, response) {
    
    service.getLuoZiColor(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );

}
get.set("wuZiQi/getLuoZiColor", getLuoZiColor);

module.exports.get = get;