const tool = require("../tool");
const service = require("../../Service/bok/keywordGetArticleSer");
const get = new Map();
function keywordGetArticle(request, response) {
    service.keywordGetArticleSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );
}

get.set("bok/keywordGetArticle", keywordGetArticle);
module.exports.get = get;