let imglist = [
    'img/about-slider-1.png',
    'img/about-slider-2.png',
    'img/about-slider-3.png',
    'img/about-slider-4.png',
    'img/about-slider-5.png'
]
let mk = document.querySelector(".dots").children
let img = document.querySelector(".img-size")
let changemainimg = function (dot, photo){
    dot.addEventListener('click', function (){
        img.src = photo
    });
}
for (let o = 0; o<imglist.length; o++){
    changemainimg(mk[o], imglist[o])
}