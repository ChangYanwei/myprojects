
function Index(num,className) {
    this.createDom(num,className);
}
Index.prototype.createDom = function (num,className) {
    let elems = document.querySelectorAll(className);
    elems.forEach((item) => {
        for (let i = 0;i < num;i++){
            let div = document.createElement("div");
            div.textContent = i;
            item.appendChild(div);
        }
    });
};
new Index(6,".six");
new Index(10,".ten");

