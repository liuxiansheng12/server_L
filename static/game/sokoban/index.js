( (poot) => {
    window.init = poot;
} )( (dom) => {
    dom.style.position = "relative";
    
    const layoutArr = [
        // 0 空白 1 墙 2 箱子所在的位置 3 人物
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 3, 0, 1, 0, 0],
        [0, 0, 1, 0, 2, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1, 1],
        [1, 0, 0, 0, 2, 0, 0, 0, 1],
        [1, 0, 2, 2, 2, 2, 2, 0, 1],
        [1, 0, 0, 0, 2, 0, 0, 0, 1],
        [1, 1, 1, 0, 2, 0, 1, 1, 1],
        [0, 0, 1, 0, 2, 0, 1, 0, 0],
        [0, 0, 1, 0, 2, 0, 1, 0, 0],
        [0, 0, 1, 0, 2, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0]
    ];

    const caseArr = [
        // 实际箱子所在的位置 [行、列]
        [3, 4],
        [4, 4],
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [6, 4],
        [7, 4],
        [8, 4],
        [9, 4],
        [10, 4]
    ];
    
    let characterCoordinate = [1, 4];
    const createDom = [];


    // 主函数
    function main() {
        // 创建标签
        createElementDom();
        xuan_ran (layoutArr);
        // 绑定事件
        addEventListenerKey();
    }

    // 创建标签
    function createElementDom() {
        for(let i = 0; i < layoutArr.length; i ++) {
            for(let j = 0; j < layoutArr[i].length; j ++) {
                const caseDom = document.createElement("div");
                createDom.push(caseDom);
                dom.appendChild(caseDom);
                // 设置dom的初始样式
                domAddStyle(caseDom, j, i);
            }
        }
    }
    

    // 根据layoutArr数组，渲染出代表的样式
    function xuan_ran (layoutArr) {
        let index = 0;
        for(let i = 0; i < layoutArr.length; i ++) {
            for(let j = 0; j < layoutArr[i].length; j ++) {
                const data = layoutArr[i][j];
                domStyle(data, j, i, index);
                index ++;
            }
        }
    }
    // 创建标签
    function domStyle(data, left, top, index) {
        const dom = createDom[index];
        dom.style.border = null;

        if(data === 1) {
            dom.style.background = "url('./image/wall.jpg') no-repeat";
            dom.style.backgroundSize = "100% 100%";
        }
        else if(data === 3) {
            dom.style.background = "url('./image/player.png') no-repeat";
            dom.style.backgroundSize = "100% 100%";
        }
        else if(data === 2) {
            // 两种样式，需要判断当前箱子所在的位置是否在指定位置
            if( !pan_duan(left, top) ) {
                dom.style.background = "url('./image/over_box.png') no-repeat";
            }
            else {
                dom.style.background = "url('./image/box.png') no-repeat";
            }
            dom.style.backgroundSize = "100% 100%";
        }
        else if(data === 0) {
            dom.style.background = null;
            dom.style.backgroundSize = null;
            // 空白位置可能是箱子的正确位置，做个标记
            if( pan_duan(left, top) ) {
                dom.style.border = "2px solid #f0f";
            }
        }
        
        return dom;
    }
    // 给创建的标签添加样式
    function domAddStyle(dom, left, top) {
        dom.style.position = "absolute";
        dom.style.left = left * 30 + "px";
        dom.style.top = top * 30 + "px";
        dom.style.width = "30px";
        dom.style.height = "30px";
        dom.style.boxSizing = "border-box";
    }

    // 判断一个箱子是否是在指定位置
    function pan_duan (x, y) {
        for(let i = 0; i < caseArr.length; i ++ ) {
            const data = caseArr[i];
            if(data[0] === y && data[1] === x)
                return true;
        }
        return false;
    }

    // 绑定事件
    function addEventListenerKey() {
        window.onkeydown = function (e) {
            const code = e.keyCode;
            switch(code) {
                case 37:
                    return characterMove("LEFT");
                case 38:
                    return characterMove("TOP");
                case 39:
                    return characterMove("RIGHT");
                case 40:
                    return characterMove("BOTTOM");
            }
        }
    }

    // 人物移动函数
    function characterMove(direction) {
        const character = characterCoordinate;
        switch(direction) {
            case "LEFT": 
                if( moveCondition(character[1] - 1, character[0]) ) {
                    characterUpdate(character[1] - 1, character[0]);
                    xuan_ran (layoutArr);
                }
                if(layoutArr[character[0]][character[1] - 1] === 2 && 
                    moveConditionAddXiang(character[1] - 2, character[0])) {
                    characterUpdate(character[1] - 1, character[0]);
                    xiangUpdate(character[1] - 2, character[0]);
                    xuan_ran (layoutArr);
                }
                return;
            case "TOP": 
                if( moveCondition(character[1], character[0] - 1) ) {
                    characterUpdate(character[1], character[0] - 1);
                    xuan_ran (layoutArr);
                }
                if(layoutArr[character[0] - 1][character[1]] === 2 && 
                    moveConditionAddXiang(character[1], character[0] - 2)) {
                    characterUpdate(character[1], character[0] - 1);
                    xiangUpdate(character[1], character[0] - 2);
                    xuan_ran (layoutArr);
                }
                return;
            case "RIGHT": 
                if( moveCondition(character[1] + 1, character[0]) ) {
                    characterUpdate(character[1] + 1, character[0]);
                    xuan_ran (layoutArr);
                }
                if(layoutArr[character[0]][character[1] + 1] === 2 && 
                    moveConditionAddXiang(character[1] + 2, character[0])) {
                    characterUpdate(character[1] + 1, character[0]);
                    xiangUpdate(character[1] + 2, character[0]);
                    xuan_ran (layoutArr);
                }
                return;
            case "BOTTOM": 
                if( moveCondition(character[1], character[0] + 1) ) {
                    characterUpdate(character[1], character[0] + 1);
                    xuan_ran (layoutArr);
                }
                if(layoutArr[character[0] + 1][character[1]] === 2 && 
                    moveConditionAddXiang(character[1], character[0] + 2)) {
                    characterUpdate(character[1], character[0] + 1);
                    xiangUpdate(character[1], character[0] + 2);
                    xuan_ran (layoutArr);
                }
                return;
        }
    }
    // 判断人物是否可以正常移动
    function moveCondition(x, y) {
        if(x < 0 || x >= layoutArr[0].length
           || y < 0 || y >= layoutArr.length ) {
            return false;
        }
        if(layoutArr[y][x] !== 0) {
            return false;
        }
        return true;
    }

    // 判断是否可以推箱子移动
    function moveConditionAddXiang(x, y) {
        if(x < 0 || x >= layoutArr[0].length
           || y < 0 || y >= layoutArr.length ) {
            return false;
        }
        if(layoutArr[y][x] !== 0 ) {
            return false;
        }
        return true;
    }

    function characterUpdate(x, y) {
        layoutArr[characterCoordinate[0]][characterCoordinate[1]] = 0;
        characterCoordinate = [y, x];
        layoutArr[y][x] = 3;
    }

    function xiangUpdate(x, y) {
        layoutArr[y][x] = 2;
        shengli();
    }

    // 判断游戏胜利函数
    function shengli() {
        for(let i = 0; i < layoutArr.length; i ++) {
            for(let j = 0; j < layoutArr[i].length; j ++) {
                if(layoutArr[i][j] == 2 && !pan_duan(j, i)) {
                    return 
                }
            }
        }
        setTimeout(() => {
            alert("游戏胜利");
        }, 100)
    }

    // 启动主函数
    main();
} )


init( document.querySelector("#app") );