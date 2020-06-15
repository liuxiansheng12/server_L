const daoGetLabelAll = require("../../Dao/bok/getLabelDao");

function getLabelSer(request, response, callBack) {
    daoGetLabelAll.getLabelAllDao((data) => {
        callBack({
            type: "ok",
            data: data
        });
    } )
}

module.exports.getLabelSer = getLabelSer;