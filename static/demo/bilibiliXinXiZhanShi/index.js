
( ( poot ) => { poot() } )(() => {
    
    const app = document.querySelector(".nei");
    // 当前展示的页数
    let index = 0;

    // 模拟数据
    const dataArr = [
        {
            id: 0,
            data: [
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                },
                {
                    img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1296516318,4177129273&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av97069605",
                    mp4Play: "#",
                    text: {
                        guan: "【爆肝动画】某科学的明日方舟   ——云联动",
                        miao: "RockyRoo",
                        dian: "7.8万播放"
                    }
                }
            ]
        },
        {
            id: 1,
            data: [
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                },
                {
                    img: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469716026,2816395410&fm=26&gp=0.jpg",
                    aHref: "https://www.bilibili.com/video/av95557419",
                    mp4Play: "#",
                    text: {
                        guan: "【Vup＆COCup】携手带你走进动画般的COC跑团世界！",
                        miao: "会蹦会跳的小真冬",
                        dian: "10.4万播放"
                    }
                }
            ]
        }
    ]


    // 创建结构
    const jiegou = jie_gou(dataArr[index]);
    // 插入结构
    cha_ru(jiegou);
    
    // 绑定事件
    click();





    function jie_gou(datas) {
        
        const data = datas.data;
        let jiegou = document.createDocumentFragment();
        for(let i = 0; i < data.length; i ++) {
            createJie( {
                nodeName: "div",
                class: "info",
                children: [
                    {
                        nodeName: "a",
                        class: "zhu",
                        href: data[i].aHref || "#",
                        children: [
                            {
                                nodeName: "div",
                                class: "img",
                                children: {
                                    nodeName: "img",
                                    src: data[i].img || ""
                                }
                            },
                            {
                                nodeName: "div",
                                class: "content",
                                children: [
                                    {
                                        nodeName: "p",
                                        class: "guan",
                                        children: data[i].text.guan || ""
                                    },
                                    {
                                        nodeName: "div",
                                        class: "xiao",
                                        children: [
                                            {
                                                nodeName: "p",
                                                class: "miao",
                                                children: data[i].text.miao || ""
                                            },
                                            {
                                                nodeName: "p",
                                                class: "dian",
                                                children: data[i].text.dian || ""
                                            }
                                        ]
                                    },
                                    {
                                        nodeName: "div",
                                        class: "but",
                                        biao: {
                                            mp4Play: data[i].mp4Play,
                                        },
                                        event: {
                                            click: function (e) {
                                                e.preventDefault();
                                                console.log(this.mp4Play);
                                            }
                                        },
                                        children: "点击播放"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, jiegou);
        }

        return jiegou;
    }

    function cha_ru( jiegou ) {
        app.innerHTML = "";
        app.appendChild(jiegou);
    }



    // 创建节点函数
    function createJie (obj, fu) {
        if(typeof obj === "string") {
            const jie = document.createTextNode(obj);
            fu.appendChild(jie);
        }else if(typeof obj === "object") {
            const jie = document.createElement(obj.nodeName);
            // 添加对应的class
            if(obj.class) {
                if( typeof obj.class === "string") {
                    jie.className = obj.class;
                }else if( typeof obj.class === "object") {
                    obj.class.forEach( (p) => {
                        jie.classList.add(p);
                    } )
                }
            }
            // 添加a标签的href
            if(obj.href) {
                jie.href = obj.href;
            }
            // 添加节点的src
            if(obj.src) {
                jie.src = obj.src;
            }
            // 添加子节点，使用递归
            if( obj.children ) {
                const toString = Object.prototype.toString.call(obj.children);
                if( toString === "[object String]" || toString === "[object Object]" ) {
                    createJie(obj.children, jie);
                } else if( toString === "[object Array]") {
                    obj.children.forEach( (p) => {
                        createJie(p, jie);
                    } )
                }
            }

            // 添加行间标识
            if(obj.biao) {
                for(let prop in obj.biao) {
                    jie[prop] = obj.biao[prop]
                }
            }
            if(obj.event) {
                for(let prop in obj.event) {
                    jie["on" + prop] = obj.event[prop]
                }
            }
            fu.appendChild(jie);
        }
    }


    function click() {
        const q = document.querySelector(".q");
        const h = document.querySelector(".h");
        
        q.onclick = function () {
            index --;
            if(index < 0) index = dataArr.length - 1;
            // 创建结构
            const jiegou = jie_gou(dataArr[index]);
            // 插入结构
            cha_ru(jiegou);
        }
        h.onclick = function () {
            index ++;
            if(index >= dataArr.length) index = 0;
            // 创建结构
            const jiegou = jie_gou(dataArr[index]);
            // 插入结构
            cha_ru(jiegou);
        }
    }
})



