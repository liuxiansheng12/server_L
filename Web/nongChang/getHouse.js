const getHouseSer = require("../../Service/nongChang/getHouse");
const get = new Map();


function getHouse(request, response) {
    getHouseSer(request, response, (data) => {
        response.writeHead(200, {
            // 设置编码的格式，与跨域没有关系
            "content-type": "text/html; charset=utf-8",
            // 允许那个域名的请求进行跨域(如果任意域名，可以使用*, 本地路径跨域请求只能用*)
            "Access-Control-Allow-Origin": "*",
            // 允许跨区请求的方式(是GET还是POST)
            "Access-Control-Allow-Methods": "GET",
            // 必须条件
            "Access-Control-Allow-Headers": "content-type, x-requested-with",
        });
        response.write(data);
        response.end();
    })
}

get.set("nongChang/getHouse", getHouse);
module.exports.get = get;