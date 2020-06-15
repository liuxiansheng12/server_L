/**
 * 向数据库中写每日一句的函数
 */
// 引入处理该请求业务的函数
const service = require("../../Service/bok/setEveryDaySer");
// 引入工具
const tool = require("../tool");

const path = new Map();


function setEveryDay(request, response) {
    service.setEveryDaySer(request, response, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool(data) );
        response.end();
    } );
}
path.set("bok/setEveryDay", setEveryDay);
module.exports.post = path;