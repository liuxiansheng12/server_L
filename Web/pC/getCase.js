const service = require("../../Service/pC/getCase");
const tool = require("../tool");
const get = new Map();

function getCase(request, response) {
    service.getCaseSer(request, response, (data) => {
       response.writeHead(200, {
           "content-type": "text/html charset=utf-8",
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Methods": "GET",
           "Access-Control-Allow-Headers": "content-type x-requested-with"
       });
       response.write( tool.writeTool(data) );
       response.end();
    } )
}

get.set("pC/getCase", getCase);
module.exports.get = get;