//封装getElementById()
function getById(id) {
    return typeof (id) === 'string' ? document.getElementById(id) : id;
}

//当前显示图片的索引，默认值为0
let index = 0;

//定时器
let timer = null;

//图片
let imgs = document.getElementsByClassName("banner_slide");
console.log(imgs);
//图片总个数
let imgTotal = imgs.length;

//圆点
let dots = getById("dots").getElementsByTagName("span");
let dotsTotal = dots.length;

//左侧菜单
let menus = document.getElementsByClassName("menu_item");
let inner_box = document.getElementsByClassName("inner_box");
let sub_menu = getById("sub_menu");


//上一张和下一张的按钮
let prev = getById("prev");
let next = getById("next");

//封装通用事件绑定方法
//element是绑定事件的dom元素，type是事件名称，handler是事件处理程序
function addHandler(element, type, handler) {
    if (element.addEventListener) {
        //非IE浏览器，前边不能加“on”
        element.addEventListener(type, handler, true);
    } else if (element.attachEvent) {
        //IE浏览器,支持DOM2级
        element.attachEvent('on' + type, handler);
    } else {
        //IE浏览器不支持DOM2级，只能使用DOM 0级
        element['on' + type] = handler;
    }
}

//隐藏和显示的函数
function itemHidden(arr, index) {
    // let arrs = Array.prototype.slice.call(arr);
    // arrs.forEach(function (item,i,arr) {
    //     item.style.display = "none";
    // });
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
    }

    arr[index].style.display = "block";
}

//改变圆点的class名称
function changeDotClass(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].className = "";
    }
    arr[index].className = "active";
}

//点击下一张按钮显示下一张图片
addHandler(next, 'click', function () {
    index += 1;
    if (index >= imgTotal) {
        index = 0;
    }

    itemHidden(imgs, index);
    changeDotClass(dots, index);
});

//点击上一张按钮显示上一张图片
addHandler(prev, 'click', function () {
    index -= 1;
    if (index <= -1) {
        index = imgTotal - 1;
    }
    itemHidden(imgs, index);
    changeDotClass(dots, index);
});

//点击圆点切换到对应的图片
for (let i = 0; i < dotsTotal; i++) {
    addHandler(dots[i], 'click', function () {
        index = i;
        itemHidden(imgs, index);
        changeDotClass(dots, index);
    })
}

//每隔两秒自动切换下一张图片，设置定时器
function startAutoPlay() {
    timer = setInterval(function () {
        index += 1;
        if (index >= imgTotal) {
            index = 0;
        }
        itemHidden(imgs, index);
        changeDotClass(dots, index);
    }, 2000);
    console.log("timer", timer);
}

addHandler(getById("main"), 'mouseover', function () {
    if (timer){
        clearInterval(timer);
    }
});
addHandler(getById("main"), 'mouseout', startAutoPlay);

// for (let i = 0;i < imgs.length;i++){
//     addHandler(imgs[i],'mouseover',function () {
//         clearInterval(timer);
//     });
//     addHandler(imgs[i],'mouseout',function () {
//         startAutoPlay();
//     });
// }

//鼠标悬浮在主菜单，右侧显示子菜单
for (let i = 0; i < menus.length; i++) {
    addHandler(menus[i], 'mouseover', function () {
        sub_menu.style.display = "block";
        itemHidden(inner_box, i);
    });

}

//鼠标离开主菜单
// for (let i = 0; i < menus.length; i++) {
//     addHandler(menus[i], 'mouseout', function () {
//         getById("sub_menu").style.display = "none";
//     });
// }

addHandler(getById("menu_content"),'mouseout',function () {
    sub_menu.style.display = "none";
});

for (let i = 0; i < inner_box.length; i++) {
    addHandler(inner_box[i],"mouseover",function () {
        sub_menu.style.display = "block";
        itemHidden(inner_box, i);
    })
}

addHandler(sub_menu,'mouseout',function () {
    sub_menu.style.display = "none";
});



startAutoPlay();
