console.log("welcome to my console");
//let element = document.getElementById("children");
//element=element.className;
//element.innerText="shamshad is a handsome boy";
//element.innerHTML='<b>shamshad is ahandsome boy</b>';
//console.log(element);
let elem = document.createElement('li');
elem.className='child';
elem.id='insertedchild';
elem.setAttribute('title','childtitle');
elem.innerHTML='code is inserted by shamshad';
let ul=document.querySelector('ul.ullist');
ul.appendChild(elem);
console.log(ul);
//let text = document.createTextNode('i ama textnode');
console.log(elem);