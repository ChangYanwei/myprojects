/**
 * 设计哈希函数
 * 1、将字符串转成比较大的数字：hashCode
 * 2、将这个大的数字hashCode压缩到数组长度范围之内
 * */
function hashFun(str, size) {
  let hashCode = 0;
  for (let i = 0;i < str.length;i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i) ;
  }

  let index = hashCode % size;
  return index;
}
