var arr = ["hi", "mike"];
console.log(arr);

arr.push("tk"); //push將資料推到陣列最後面

console.log(arr);

arr.unshift("nike"); //unshift將資料推到陣列最前面

console.log(arr);

arr.pop(); //刪除最後一筆資料

console.log(arr);

arr.shift(); //刪除2第一筆資料

console.log(arr);

arr.splice(1, 0, "you"); //插入第一個位置

console.log(arr);

arr.splice(1, 1, "to"); //替換第一個位置

console.log(arr);

var arr1 = ["A", "B", "C", "D"];
arr1.reverse(); //資料反轉

console.log(arr);

var arr3 = arr.concat(arr1); //合併陣列

console.log(arr3);

for (var i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

function handclick(e) {
  //console.log(e);
  console.log(this);
  e.target.style.fontSize = "80px";
}

var btn = document.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
  console.log(btn[i]);
  btn[i].addEventListener("click", handclick);
}
