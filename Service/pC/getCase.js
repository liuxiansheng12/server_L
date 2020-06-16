
const aggregate = {
    project: [
        {
            id: 1,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "QQ音乐播放器",
            intreduce: "无介绍",
            href: "/project/kuwo",
            careful: "MV全屏后，需要按两下Esc键退出全屏状态"
        },
        {
            id: 2,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "QQ音乐播放器——带频谱显示",
            intreduce: "无介绍",
            href: "/project/music_spectrum",
            careful: "歌曲加载缓慢，只有播放标记，从音乐加载中，变成播放音乐，此时音乐加载完成，可以正常播放了。否则无法播放"
        },
    ],
    game: [
        {
            id: 1,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "俄罗斯方块",
            intreduce: "左右键，移动俄罗斯方块，下键加速降落。空格切换形状",
            href: "/game/tetris"
        },
        {
            id: 2,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "斗地主",
            intreduce: "必须三个人，才会开局进行游戏。负责就会陷入等待过程中",
            href: "/game/puk"
        },
        {
            id: 3,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "推箱子",
            intreduce: "按上下左右键进行人物的移动",
            href: "/game/sokoban"
        },
        {
            id: 4,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "消消乐",
            intreduce: "无介绍",
            href: "/game/xiaoXiaoLe"
        },
        {
            id: 4,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "五子棋",
            intreduce: "共有单机、双人、AI三种玩法",
            href: "/game/gobang"
        }
    ],
    demo: [
        {
            id: 1,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "哔哩哔哩信息展示",
            intreduce: "无介绍",
            href: "/demo/bilibiliXinXiZhanShi"
        },
        {
            id: 2,
            imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586421254304&di=39fa0b365c0e6c906b8d422c7cb722dc&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170322%2F20170322101109_43103656e73a2038299ec17c648fc6c6_15.jpeg",
            title: "下雨天小动画",
            intreduce: "无介绍",
            href: "/demo/xiaYvTian"
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