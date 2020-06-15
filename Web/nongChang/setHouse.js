const setHouseSer = require("../../Service/nongChang/setHouse");
const post = new Map();


function setHouse(request, response) {
    setHouseSer(request, response, () => {
        response.writeHead(200);
        response.write("");
        response.end();
    });
}

post.set("nongChang/setHouse", setHouse);
module.exports.post = post;