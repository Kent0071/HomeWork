'use strict';

let div = document.createElement('div');
document.body.prepend(div);
div.style.cssText=`width: 400px;
position: relative;
height: 400px;
background-color: rgb(76, 0, 150);`;

document.body.style.cssText=`height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;


let img1 = document.createElement('img');
img1.setAttribute('src', 'icon01.png');
document.body.querySelector('div').append(img1);

let img2 = document.createElement('img');
img2.setAttribute('src', 'icon02.png');
document.body.querySelector('div').append(img2);

img2.style.cssText=`position: absolute;
left: 0;
bottom: 0;
`;
let img3 = document.createElement('img');
img3.setAttribute('src', 'icon03.png');
document.body.querySelector('div').append(img3);

img3.style.cssText=`position: absolute;
right: 0;
bottom: 0;
`;
let img4 = document.createElement('img');
img4.setAttribute('src', 'icon04.png');
document.body.querySelector('div').append(img4);

img4.style.cssText=`position: absolute;
right: 0;
top: 0;
`;
let img5 = document.createElement('img');
img5.setAttribute('src', 'icon05.jpg');
document.body.querySelector('div').append(img5);

img5.style.cssText=`position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;
