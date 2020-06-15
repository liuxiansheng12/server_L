

const req = require("request");
const url = require("url");
const fs = require("fs");

const get = new Map();

function kuwo(request, response) {
    const pathName = url.parse(request.url).pathname;
    const pathData = url.parse(request.url, true).query;
    
    const arr = [];
    for(const prop in pathData) {
        if(pathData[prop]) arr.push(`${prop}=${pathData[prop]}`);
        else arr.push(`${prop}=`);
    }
    const u = pathName.substr(5) + "?" + arr.join("&");
    
    dai(encodeURI("http://www.kuwo.cn" + u), (data) => {
        response.writeHead(200, {
            "content-type": "text/html charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "content-type x-requested-with"
        });
        if( isJSONString(data) ) {
            response.write(data);
        }else {
            response.write( JSON.stringify({data: data}) );
        }
        response.end();
    } );
}

// 判断一个数据是否为json格式的数据
function isJSONString(jsonStr) {
    try {
        if( JSON.parse(jsonStr) ) {
            return true;
        }
    }
    catch(err) {}
    return false;
}


// 对应歌曲的下载
function downMusic(request, response) {
    // 解析数据
    const pathData = url.parse(request.url, true).query;
    // 
    const musicId = pathData.musicId;
    // 进行歌曲的获取
    dai(`http://www.kuwo.cn/url?format=mp3&rid=${musicId}&response=url&type=convert_url3&br=128kmp3&from=web`, (data) => {
        const d = JSON.parse( data );
        const url = d.url;

        var stream = fs.createWriteStream("./static/ashfdoasdf.mp3");
        req(url).pipe(stream).on('close', () => {
            const data = fs.readFileSync("./static/ashfdoasdf.mp3");
            response.end(data);
        } ); 
         
    } )
}

// 服务器代理请求数据
function dai(url, callBack) {
    req({
        url: url,
        headers: {
            "csrf": "YK6NOX2MAU", 
            "Cookie": "kw_token=YK6NOX2MAU",
            "Host": "www.kuwo.cn",
            "Referer": "http://www.kuwo.cn/"
        }
    }, (err, resp, body) => {
        if(err) {
            console.log(err);
            dai(url, callBack);
        }
        else {
            callBack(body);
        }
    } )
}



function musicPlay(request, response) {
    const pathData = url.parse(request.url, true).query;
    const u = pathData.url;
    console.log(u);
    var stream = fs.createWriteStream("./static/ashfdoasdf.mp3");
    req(u).pipe(stream).on('close', () => {
        const data = fs.readFileSync("./static/ashfdoasdf.mp3");
        response.end(data);
    } ); 
}



get.set("kuwo/*", kuwo);
get.set("downMusic/kuwo", downMusic);
get.set("musicPlay/kuwo", musicPlay);
module.exports.get = get;
