const service = require("../../Service/bok/getEveryDaySer");
const tool = require("../tool");

const get = new Map();

function getEveryDay(request, response) {
    // 拿到数据
    service.getEveryDaySer( (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}

get.set("bok/getEveryDay", getEveryDay);
module.exports.get = get;