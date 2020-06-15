const service = require("../../Service/bok/publishMessageSer");
const tool = require("../tool");
const get = new Map();

function publishMessage(request, response) {
    service.publishMessageSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );
}
get.set("bok/publishMessage", publishMessage);
module.exports.get = get;