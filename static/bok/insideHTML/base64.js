// 处理图片转换成base64的方法
function base64(article, callBase) {
    const srcAggre = getImgSrc(article);
    if(srcAggre.size == 0) {
        callBase(article);
        return ;
    }
    // 把所有的路径对应的图片，转换成base64位的编码
    for(let prop of srcAggre) {
        zhuan(prop[0], srcAggre, () => {
            // 把文本中的所有图片路径全部替换成base64位编码
            const data = imgSrcRepBase64(article, srcAggre);
            callBase(data);
        } );
    }
}
// 利用正则得到所有图片的路径，然后返回路径集合
function getImgSrc(str) {
    const aggregate = new Map();
    // 定义正则
    const imgReg = /<img.*src=.{1}(.*).{1} .*\/>/g;
    // 取出路径
    str.replace(imgReg, (label, src) => {
        if( !aggregate.get(src) ) {
            aggregate.set(src, null);
        }
        return label;
    } );

    return aggregate;
}

function imgSrcRepBase64(str, srcAggre) {
    // 定义正则
    const imgReg = /<img.*src=.{1}(.*).{1} .*\/>/g;
    // 进行替换
    return str.replace(imgReg, (label, src) => {
        return label.replace(src, srcAggre.get(src));
    } );
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
    var dataURL = canvas.toDataURL("image/"+ext);
    return dataURL;
}

function zhuan(src, aggre, callBase) {
    var imgLink = src;
    var tempImage = new Image();
    // 不添加该属性，转换base64的过程中，toDataURL的位置会报跨域的错误
    tempImage.setAttribute("crossOrigin",'anonymous');
    tempImage.src = imgLink;
    tempImage.crossOrigin = "*";
    tempImage.onload = function(){
        var base64 = getBase64Image(tempImage);
        aggre.set(src, base64);

        // 判断是否所有的图片都已经转换完成
        if( judge(aggre) ) {
            callBase();
        }
    }
}

function judge(aggre) {
    for(let prop of aggre) {
        if( !prop[1] ) return false;
    }
    return true;
}
