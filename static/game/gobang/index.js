
( (tool) => {
    tool();
} )( () => {
    const caiDan = document.querySelector(".caiDan");

    // 给菜单绑定上事件，使用事件委托的方式
    caiDan.onclick = function (e) {
        const className = e.target.className;
        let type = "";

        if(className == "d") {
            type = "单机";
        }
        else if(className == "s") {
            type = "双人";
        }
        else if(className == "z") {
            type = "智能";
        }
        // 启动对应的游戏功能
        kaiShiYouXi(type);

        caiDan.style.display = "none";
    }

    

} ) 