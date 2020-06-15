const tool = require("../../tool");
const service = require("../../../Service/wuZiQi/guanBiSer");

const get = new Map();

function guanBi(request, response) {
    service.guanBiSer(request, (data) => {
        response.writeHead(200);
        response.write( tool.writeToll(data) );
        response.end();
    });
}

get.set("wuZiQi/guanBi", guanBi);
module.exports.get = get;