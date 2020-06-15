const service = require("../../Service/bok/publishMessageReplySer");
const tool = require("../tool");
const get = new Map();

function publishMessageReply(request, response) {
    service.publishMessageReplySer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );
}
get.set("bok/publishMessageReply", publishMessageReply);
module.exports.get = get;