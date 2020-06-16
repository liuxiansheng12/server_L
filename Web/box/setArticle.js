const service = require("../../service/bok/setArticleSer");
const tool = require("../tool");
const post = new Map();
function setArticle(request, response) {
    service.setArticleSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}
post.set("bok/setArticle", setArticle);
module.exports.post = post;