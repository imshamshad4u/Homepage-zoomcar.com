console.log("this iis my first weebsite");
let btn = document.getElementById("bton");
btn.addEventListener("click",func)

function func(e){
    console.log("thanks",e);
    e.preventDefault();
}
// document.getElementById("header").addEventListener
// ("click",function(e){
//     console.log("u have clicked the header");
//     console.log(e.target);
// });