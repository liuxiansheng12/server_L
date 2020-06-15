const tool = require("../tool");
const serGetLabel = require("../../Service/bok/getLabelSer");
const get = new Map();
function getLabel(request, response) {

    serGetLabel.getLabelSer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } )
 
}

get.set("bok/getLabel", getLabel);
module.exports.get = get;