const dao = require("../../Dao/bok/getLatestCommentDao");
const tool = require("../tool");
const url = require("url");

const get = new Map();

function getLatestComment(request, response) {
    const pathData = url.parse(request.url, true).query;
    dao.getLatestCommentDao(+pathData.nub, (data) => {
        response.writeHead(200);
        response.write( tool.writeTool({
            type: "ok",
            data: data
        }) );
        response.end();
    } )
}

get.set("bok/getLatestComment", getLatestComment);


module.exports.get = get;

