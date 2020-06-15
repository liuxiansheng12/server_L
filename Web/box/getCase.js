const service = require("../../Service/bok/getCaseSer");
const tool = require("../tool");
const get = new Map();

function getCase(request, response) {
    service.getCaseSer(request, response, (data) => {
       response.writeHead(200);
       response.write( tool.writeTool(data) );
       response.end();
    } )
}

get.set("bok/getCase", getCase);
module.exports.get = get;