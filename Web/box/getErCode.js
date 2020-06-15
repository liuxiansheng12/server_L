const tool = require("../tool");

const get = new Map();

function getErCode(request, response) {
    // 生成一个二维码
    const code = tool.erCode();

    response.writeHead(200);
    response.write( JSON.stringify(code) );
    response.end();
}

get.set("bok/getErCode", getErCode);

module.exports.get = get;