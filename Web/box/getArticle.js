const service = require("../../Service/bok/getArticleSer");
const tool = require("../tool");
const get = new Map();

function getArticle(request, response) {
    service.getArticleSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}
get.set("bok/getArticle", getArticle);
module.exports.get = get;