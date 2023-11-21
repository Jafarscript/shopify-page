// alert('I am connected oooo')
let bell = document.querySelector('.notifyButton');
let bellDrop = document.querySelector('.drop')

bell.addEventListener('click', function(){
    bellDrop.classList.toggle('dropOpen')
})

let info = document.querySelector('.storename')
let infoTab = document.querySelector('.storeTab')

info.addEventListener('click', function(){
    infoTab.classList.toggle('tabOpen')
})

let close = document.querySelector('.close')
let planAlert = document.querySelector('.planAlert')

close.addEventListener('click', function(){
    planAlert.classList.toggle('hideAlert')
    // alert(planAlert.classList)
})

