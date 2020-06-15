const service = require("../../Service/bok/getMessageSer");
const tool = require("../tool");

const get = new Map();

function getMessage(request, response) {
    // 拿到数据
    service.getMessageSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}

get.set("bok/getMessage", getMessage);
module.exports.get = get;