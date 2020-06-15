const tool = require("../tool");
const service = require('../../Service/bok/getSpesificArticleSer');

const get = new Map();

function getSpesificArticle(request, response) {
    service.getSpesificArticleSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
}
get.set("bok/getSpesificArticle", getSpesificArticle);

module.exports.get = get;