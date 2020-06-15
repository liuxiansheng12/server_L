
const aggregate = {
    project: [
        {},
        {}
    ],
    game: [
        {
            id: 1,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "俄罗斯方块",
            intreduce: "无介绍",
            href: "/xiaoYouXi/e_luo_si"
        },
        {
            id: 2,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "斗地主",
            intreduce: "必须三个人，才会开局进行游戏",
            href: "/xiaoYouXi/puk"
        },
        {
            id: 3,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "推箱子",
            intreduce: "无介绍",
            href: "/xiaoYouXi/tuiXiangZi"
        },
        {
            id: 4,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "消消乐",
            intreduce: "无介绍",
            href: "/xiaoYouXi/xiaoxiaol"
        },
        {
            id: 4,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "五子棋",
            intreduce: "共有单机、双人、AI三种玩法",
            href: "/xiaoYouXi/wuZiQi"
        }
    ],
    demo: [
        {
            id: 1,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "哔哩哔哩信息展示",
            intreduce: "无介绍",
            href: "/xiaoDemo/bilibiliXinXiZhanShi"
        },
        {
            id: 2,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "下雨天小动画",
            intreduce: "无介绍",
            href: "/xiaoDemo/xiaYvTian"
        },
    ]
}
const url = require("url");
function getCaseSer(request, response, callBack) {
    const pathData = url.parse( request.url, true ).query;
    const data = aggregate[pathData.type];
    callBack( {
        type: "ok",
        data: data
    } )
}

module.exports.getCaseSer = getCaseSer;