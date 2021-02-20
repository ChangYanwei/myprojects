let wrapUl = document.querySelector(".wrapUl");
console.log(wrapUl);
let styleObj = window.getComputedStyle(wrapUl);
let wrapW = parseFloat(styleObj.width);
let wrapH = parseFloat(styleObj.height);
console.log(wrapW,wrapH);
let liW = wrapW / 5;
let liH = wrapH / 5;
console.log(liW,liH);

function createDom() {
    //i代表行，j代表列
    for (let i = 0;i < 5;i++){
        for (let j = 0;j < 5;j++){
            let li = document.createElement('li');
            let div = document.createElement('div');
            div.className = 'box';
            let img = document.createElement('img');

            div.appendChild(img);
            li.appendChild(div);

            // let cssText = "width:" + liW + "px;" +
            //     "height:" + liH + "px;" +
            //     "position:absolute;" +
            //     "top:" + i * liH + "px;" +
            //     "left:" + j * liW + "px;";
            // li.setAttribute('style',cssText);

            li.style.width = liW + "px";
            li.style.height = liH + "px";
            // li.style.position = "absolute";
            li.style.left = j * liW + "px";
            li.style.top = i * liH + "px";
            li.style.transform = "scale(0.9) rotate(" + (Math.random() * 40 - 20) + "deg)" +
                "translateX(" + (30 * j - 60) + "px)" +
                "translateY(" + (30 * i - 60) + "px)" +
                "translateZ(-" + (Math.random() * 500) + "px)" ;

            //实现了遍历一个文件夹中的所有图片
            img.src = './images/img' + (i * 5 + (j + 1)) + ".jpg";

            wrapUl.appendChild(li);
        }
    }

    bindEvent();
}

function bindEvent() {
    let change = true;
    let lis = document.getElementsByTagName("li");
    for (let i = 0;i < lis.length;i++){
        lis[i].addEventListener('click',function (event) {
            let bgImg = event.target.src;
        });
        // (function (index) {
        //     lis[i].delay(10 * index);
        //     lis[i].style.animate({"opacity":1},200,function(){
        //
        //     }});
        // })();
    }
    if (change){
        //小图变大

    }else{
        //大图变小

    }
}
createDom();
