const setSeedSer = require("../../Service/nongChang/setSeed");
const post = new Map();


function setSeed(request, response) {
    setSeedSer(request, response, () => {
        response.writeHead(200);
        response.write("");
        response.end();
    });
}

post.set("nongChang/setSeed", setSeed);
module.exports.post = post;