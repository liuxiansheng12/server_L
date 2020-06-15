const setLandSer = require("../../Service/nongChang/setLand");
const post = new Map();


function setLand(request, response) {
    setLandSer(request, response, () => {
        response.writeHead(200);
        response.write("");
        response.end();
    });
}

post.set("nongChang/setLand", setLand);
module.exports.post = post;