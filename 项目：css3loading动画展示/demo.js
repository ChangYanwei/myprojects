let bar = document.getElementById("bar");
let pageLoading = document.querySelector(".pageLoading");
let monsterText = document.querySelector(".monsterText");

console.log(pageLoading);
let per = 0;
let timer = setInterval(function () {
    per += 1;
    bar.style.width = per + "%";
    if (per > 100){
        pageLoading.classList.add('complete');
        setTimeout(function () {
            monsterText.innerHTML = '<h2>we are monster</h2>';
        },3000);
        clearInterval(timer);
    }
},30)
