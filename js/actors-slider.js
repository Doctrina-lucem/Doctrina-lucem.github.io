let actorsArrowLeft = document.querySelector(".actors-arrow-left")
let actorsArrowRight = document.querySelector(".actors-arrow-right")
let actorsSliders = document.querySelector(".actors-sliders").children

var i = 0
function clickRight (){
  if(i == 3){
    i = 0
    actorsSliders[3].classList.add('disable')
    actorsSliders[0].classList.remove('disable')
  }
  else{
    i++
    actorsSliders[i-1].classList.add('disable')
    actorsSliders[i].classList.remove('disable')
  }
}
function clickLeft (){
  if(i == 0){
    i = 3
    actorsSliders[0].classList.add('disable')
    actorsSliders[3].classList.remove('disable')
  }
  else{
    i--
    actorsSliders[i+1].classList.add('disable')
    actorsSliders[i].classList.remove('disable')
  }
}
actorsArrowRight.addEventListener('click', function(){
  clickRight()
})
actorsArrowLeft.addEventListener('click', function(){
  clickLeft()
})