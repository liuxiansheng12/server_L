const setMoneySer = require("../../Service/nongChang/setMoney");
const post = new Map();


function setMoney(request, response) {
    setMoneySer(request, response, () => {
        response.writeHead(200);
        response.write("");
        response.end();
    });
}

post.set("nongChang/setMoney", setMoney);
module.exports.post = post;