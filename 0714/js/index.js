function init(){
    var tl = gsap.timeline();
    //tl.to('.page1',{duration: 1,width: '100%'})
    //  .to('.page2',{duration: 1,height: '100%'}) //to要再明確值或座標時用
    //  .from('.title',{duration: 1,opacity: 0, y: -100})
    //  .from('.about',{duration: 1,opacity: 0}); //from在只知道移動過去的數值（資訊量不夠）

      tl.to('.page1',{duration: 1,width: '100%'})
      .to('.page2',{duration: 1,height: '100%'}) //to要再明確值或座標時用
      .from(['.title','.about'],{   //同時控制兩個物件（使用陣列）
          duration: function(i){ //會回傳訊順序
            var t = [1,2]
            return t[i] //回傳秒數
          },
          opacity: 0,
           y: function(i){
            var t = [-100,+100]
            return t[i] //回傳秒數
           },
        }) 

}

init();