const tool = require("../tool");
const service = require("../../Service/bok/articleClicksIncreaseSer");

const get = new Map();

function articleClicksIncrease(request, response) {
    service.articleClicksIncreaseSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}
get.set("bok/articleClicksIncrease", articleClicksIncrease);
module.exports.get = get;