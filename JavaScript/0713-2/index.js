window.addEventListener('resize',function(){
    if(window.innerWidth < 500){
        console.log("<500");
    }
})

window.addEventListener("scroll",function(){
    console.log(window.scrollY);
})