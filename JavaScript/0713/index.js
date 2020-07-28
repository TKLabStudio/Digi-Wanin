// console.log(document.getElementById("app"))

// document.getElementById("btn").addEventListener("click" , function(){
//     console.log("OK");
// }) //監聽按鈕並執行function

console.log(document.getElementsByClassName("btn"))

document.getElementsByClassName("btn")[0].addEventListener("click" , function(){
     console.log("0");
 }) //監聽按鈕並執行function


 function Init(){ //習慣寫到最上面或最下面
    console.log("1");
 }

 document.getElementsByClassName("btn")[1].addEventListener("click" , Init)

 var Init2 = function(){ //另一種function寫法，得先宣告

 }

 function Init3(a,b){
     console.log(a);
     console.log(b);
 }

 Init3("Hi","World");

 function add(a,b){
     console.log(typeof b);
     if((typeof b !== Number) && (typeof a !== Number)){
         //return "Type is not Num";
         //轉數字
         a=Number(a); //強制型別轉換
         b=Number(b);
         a=a-0; //強制型別轉換
         b=b-0;
         a=+a; //強制型別轉換
         b=+b;
     }
     //if(typeof b === 'Number'){ //===比較型別
     //   alert("Type is not Num")
   //}
    return a+b;
}

console.log(add('4',4));

function str(c){
    c.toString(); //強制型別轉換
    c = c + ""; //強制型別轉換
   return c;
}

console.log(str("5"));

console.dir(document.getElementsByClassName("btn"))


document.getElementById("btn").addEventListener("click" , function(){
    console.log(this);
})

document.getElementById("btn").addEventListener("click" , function(){
    var self = this;
    
})

var gameStartBtn = document.getElementById('start-btn');
var startStage = document.getElementsByClassName('Start-stage')[0]
var readyTimeTxt = document.getElementsByClassName('ready-time')[0]
var gameTimeTxt = document.getElementsByClassName('game-time')[0]
var player = document.getElementsByClassName('play-btn')[0]
var overText = document.getElementsByClassName('Text')[0]
var PlayerStage = document.getElementsByClassName('Play-stage')[0]
var resetBtn = document.getElementById('reSet')

var closeTimer;
var closeGameTimer;
var readyTime;
var gameTime;
var clickInt;

//readyTimeTxt.innerHTML = readTime;
//gameTimeTxt.innerHTML = 'Game Time：' + gameTime;

function Init(){
    readyTime = 3;
    gameTime = 3;
    clickInt = 0;
    readyTimeTxt.innerHTML = readyTime;
    gameTimeTxt.innerHTML = 'Game Time：' + gameTime
}
Init();
function StartGame(){
    startStage.classList.add("hidden")
    closeTimer = setInterval(function(){
        //console.log('count');
        readyTime -= 1;
        readyTimeTxt.innerHTML = readyTime;
        if(readyTime <= 0){
            clearInterval(closeTimer)
            readyTimeTxt.classList.add('hidden');
            GamePlayer();
        }
    }, 1000)
}
function GamePlayer(){
    closeGameTimer = setInterval(function(){
        gameTime -= 1
        gameTimeTxt.innerHTML = 'Game Time：' + gameTime
        if(gameTime <= 0){
            clearInterval(closeGameTimer)
            player.removeEventListener('click', addClickInt);
            GameOver();
        }
    }, 1000)
    player.addEventListener('click', addClickInt)
        //player.addEventListener('click',function(){
    //    if(gameTime <= 0)
    //    {
    //        return; //中斷
    //    }
    //    clickInt++;
    //    console.log(clickInt);
    //})
}
function addClickInt(){
    clickInt++;
    console.log(clickInt);
}
function GameOver(){
    PlayerStage.classList.add('hidden');
    if(clickInt > 10){
        overText.innerHTML = 'Win';
    }else{
        overText.innerHTML = 'Loser';
    }
    resetBtn.addEventListener("click", function(){
        // window.location.reload();
        Init();
        resetDom();
    })
}
function resetDom(){
    startStage.classList.remove("hidden")
    readyTimeTxt.classList.remove('hidden');
    PlayerStage.classList.remove('hidden');
}
gameStartBtn.addEventListener('click', function(){
    StartGame()
})


