console.log("welcome to ajax tutorial");
let btn = document.getElementById("fetchdt");
btn.addEventListener("click", xmlhttpreq);
function xmlhttpreq() {
    console.log("u have clicked fetch-btn");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "aja.txt", true);

    xhr.onprogress = function () {
        console.log("on progress....");
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else{
            console.log("some error occured");
        }
    }
    xhr.send();
}
