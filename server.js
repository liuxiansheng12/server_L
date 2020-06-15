/**
 * 处理请求的文件
 */
// const dao = require("./Dao/deleteMysql");
// const fs = require("fs");
const express = require("express");
// 创建服务
const app = new express();
// 指定端口和域名
// app.listen(10086, "192.168.0.105");
app.listen(10086);
// 指定静态请求加载文件的根路径
app.use( express.static("./static") );


// 引入动态接口对应的方法集合
const dynamicAggre = require("./creaDynamicMap");
// 添加动态接口的处理函数
dynamicAggre.get.forEach( (k, i) => {
    // console.log(k, i);
    app.get("/" + i, k);
} );
dynamicAggre.post.forEach( (k, i) => {
    // console.log(k, i);
    app.post("/" + i, k);
} );
