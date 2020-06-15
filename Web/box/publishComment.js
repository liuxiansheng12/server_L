const service = require("../../Service/bok/publishCommentSer");
const tool = require("../tool");
const get = new Map();

function publishComment(request, response) {
    service.publishCommentSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );
}
get.set("bok/publishComment", publishComment);
module.exports.get = get;