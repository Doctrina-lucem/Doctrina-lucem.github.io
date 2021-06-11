let seasonsArrowLeft = document.querySelector(".seasons-arrow-left")
let seasonsArrowRight = document.querySelector(".seasons-arrow-right")
let seasonsSliders = document.querySelector(".seasons-sliders").children

var z = 0
function clickSeasonsRight (){
  if(z == 3){
    z = 0
    seasonsSliders[3].classList.add('disable')
    seasonsSliders[0].classList.remove('disable')
  }
  else{
    z++
    seasonsSliders[z-1].classList.add('disable')
    seasonsSliders[z].classList.remove('disable')
  }
}
function clickSeasonsLeft (){
  if(z == 0){
    z = 3
    seasonsSliders[0].classList.add('disable')
    seasonsSliders[3].classList.remove('disable')
  }
  else{
    z--
    seasonsSliders[z+1].classList.add('disable')
    seasonsSliders[z].classList.remove('disable')
  }
}
seasonsArrowRight.addEventListener('click', function(){
  clickSeasonsRight()
})
seasonsArrowLeft.addEventListener('click', function(){
  clickSeasonsLeft()
})