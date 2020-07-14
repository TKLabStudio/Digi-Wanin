setInterval(function () {
  //
  console.log(100);
}, 2000);

function set(callback) {
  setTimeout(function () {
    //兩秒內執行
    console.log(100);
    callback();
  }, 2000);
}

set(function () {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
});
