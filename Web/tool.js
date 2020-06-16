/**
 * 工具
 */
const captcha = require("svg-captcha");

function writeTool(data) {
    let da = null;
    if(!data) da = "{}";
    else if( typeof data === "string") {
        da = data;
    }
    else if( typeof data === "object" ) {
        da = JSON.stringify(data);
    }
    return da;
}

// 创建一个二维码
function erCode() {
    const code = captcha.create({fontSize: 32, width: 80, height: 32});
    return code;
}

module.exports.writeTool = writeTool;
module.exports.erCode = erCode;