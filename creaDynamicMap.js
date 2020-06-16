
const fs = require("fs");
const get = new Map();
const post = new Map();
const webFileAggre = fs.readdirSync("./Web");

function createNynamicAggre(arr, fileName) {
    for(let i = 0; i < arr.length; i ++) {
        // 路径合成
        const url = fileName + "/" + arr[i];
        // 没有点的话，表示还是个文件夹，需要继续向下读取处理
        if(arr[i].indexOf(`.`) === -1) {
            createNynamicAggre( fs.readdirSync(url), url );
        }
        // 是普通的文件，就要进行引入然后进行分析
        else {
            const fileData = require(url);
            // 进行接口的汇总
            if(fileData.get) {
                const g = fileData.get;
                for(const prop of g) {
                    if( !get.get(prop[0]) ) {
                        get.set( prop[0], prop[1] );
                    }else {
                        console.log(`${url}下${prop[0]}接口重复`);
                    }
                }
            }
            if(fileData.path) {
                const g = fileData.path;
                for(const prop of g) {
                    if( !get.get(prop[0]) ) {
                        get.set( prop[0], prop[1] );
                    }else {
                        console.log(`${url}下${prop[0]}接口重复`);
                    }
                }
            }
            if(fileData.post) {
                const p = fileData.post;
                for(const prop of p) {
                    if( !post.get(prop[0]) ) {
                        post.set( prop[0], prop[1] );
                    }else {
                        console.log(`${url}下${prop[0]}接口重复`);
                    }
                }
            }
        }
        
    }
}
createNynamicAggre(webFileAggre, "./Web");


module.exports.get = get;
module.exports.post = post;