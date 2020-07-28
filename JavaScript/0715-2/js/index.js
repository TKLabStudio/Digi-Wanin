var a = 1;
a = "hi";

console.log(a);

if (true) {
  let b = 1; //區域性變數，括號外拿不到
  b = "hi";
}
//console.log(b); //會報錯，沒辦法存取let

const c = 1; //const的值不能被改變，專門處理不可被改變的變數
//c = "hi"; //會報錯
console.log(c);

var i = "hi";
for (var i = 0; i < 5; i++) {}
console.log(i); //i被污染了

for (let i = 5; i < 10; i++) {
  console.log(i);
}
console.log(i); //i沒被污染

for (var i = 0; i < 5; i++) {
  //console.log(i);
  setTimeout(function () {
    console.log(i); //跑五個5，因為迴圈比setTimeout快
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  //console.log(i);
  setTimeout(function () {
    console.log(i); //從1跑到5，let不影響變數
  }, 1000);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  //=>箭頭函式只是語法堂，並不是完整的function
  console.log(this); //指向Window
});

// btn.addEventListener("click", function(){
//     console.log(this); //指向按鈕
//   });

// btn.addEventListener("click", () => {
//   //=>箭頭函式只是語法堂，並不是完整的function
//   gsap.to(".box", {
//     duration: 2,
//     x: 100,
//     opacity: 0.5,
//     onComplete: function () {
//       console.log(this); //指向Tween
//     },
//   });
// });

// btn.addEventListener("click", function () {
//   gsap.to(".box", {
//     duration: 2,
//     x: 100,
//     opacity: 0.5,
//     onComplete: () => {
//       console.log(this); //Btn
//     },
//   });
// });

btn.addEventListener("click", (e) => {
  console.log(e.target); //使用e來指向Btn
  gsap.to(".box", {
    duration: 2,
    x: 100,
    opacity: 0.5,
    onComplete: () => {
      //console.log(this); //Btn
    },
  });
});

// const add = function (a, b) {
//   if (a === undefined) a = 1;
//   if (b === undefined) b = 1;
//   return a + b;
// };

const add = (a = 400, b = 4) => {
  return a + b;
};

// const add = (a, b) => a + b; //只有一行的寫法，直接回傳a+b

console.log(add(undefined, 8));

const obj = {
  name: "hi", //裡面的值不受const管理
  age: 12,
  adress: "gtgt",
};

obj.name = "tk"; //可以直接修改
console.log(obj.name);

var name1 = obj.name; //一項一項取出
console.log(name1);

const { name, age, adress } = obj; //解構，直接取出
console.log(age);

// const obj1 = { //把變數變成物件，傳統做法
//   name: name,
//   age: age,
//   adress: adress,
// };
//console.log(obj1);

const obj1 = {
  name,
  age,
  adress,
};

console.log(obj1);

const id = 5;

const str = "Num:" + id;

const str2 = `Num:${id}`;

console.log(str2);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10];

const arr4 = [...arr1, ...arr2, ...arr3]; //將三個arr合再一起，擴展運算子
console.log(arr4);

const arr5 = [1, 2, 6, ...arr2]; //顯拷貝而已，要深拷貝另有他法
console.log(arr5);

const TimeOut = (callBack) => {
  setTimeout(() => {
    callBack();
  }, 2000);
};

TimeOut(() => {
  console.log("Out");
});

const prom = (api) => {
  return new Promise((resolve, reject) => {
    axios
      .get(api)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
    //resolve(txt);

    // setTimeout(() => {
    //   resolve(txt);
    // }, 1000);
  });
};

// prom("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
//   .then((res) => {
//     console.log(res);
//     //return prom("se");
//     return prom("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050");
//   })
//   .then((res) => {
//     console.log(res);
//   });

prom("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
  .then((res) => {
    console.log(res);
    //return prom("se");
    return prom("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050");
  })
  .then((res) => {
    console.log(res);
  });

const api = "https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050";
prom(api);
Promise.all([prom(api), prom(api), prom(api)]).then((values) => {
  console.log(values);
});
