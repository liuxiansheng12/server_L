const service = require("../../Service/bok/getCommentSer");
const tool = require("../tool");

const get = new Map();

function getComment(request, response) {
    // 拿到数据
    service.getCommentSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}

get.set("bok/getComment", getComment);
module.exports.get = get;