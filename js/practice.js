console.log("welcome to javascript")
// let link=document.links[0];
// console.log(link);
let str = "python";
let alink = document.links;
let href;
Array.from(alink).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});


