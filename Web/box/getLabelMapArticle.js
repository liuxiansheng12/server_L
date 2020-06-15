const tool = require("../tool");
const service = require("../../Service/bok/getLabelMapArticleSer");

const get = new Map();

function getLabelMapArticle(request, response) {
    service.getLabelMapArticleSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}

get.set("bok/getLabelMapArticle", getLabelMapArticle);
module.exports.get = get;