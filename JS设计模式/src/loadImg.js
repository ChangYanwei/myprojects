function loadImg(src) {
  let promise = new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      resolve(img);
    }

    img.onerror = function () {
      reject('图片加载失败')
    }

    img.src = src;
  })

  return promise;
}

export {loadImg}
