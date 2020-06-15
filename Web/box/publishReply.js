const service = require("../../Service/bok/publishReplySer");
const tool = require("../tool");
const get = new Map();

function publishReply(request, response) {
    service.publishReplySer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );
}
get.set("bok/publishReply", publishReply);
module.exports.get = get;