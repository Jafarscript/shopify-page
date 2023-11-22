// alert('I am connected oooo')
let bell = document.querySelector('.notifyButton');
let bellDrop = document.querySelector('.drop')

bell.addEventListener('click', function(){
    bellDrop.classList.toggle('dropOpen')
    if (bell.style.background = '#656266') {
        bell.style.background = '#656266'; // Set it back to the original state
    } else {
        bell.style.background = '#656266';
    }
    
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

let greyButtons = document.querySelectorAll('.greyBtn');

greyButtons.forEach(function(button) {
    button.addEventListener('mousedown', function() {
        button.style.background = '#2B2B2B';
        button.style.boxShadow = '0px 0px 0px 1.5px #333, 0px 3px 0px 0px #000 inset';
    });

    document.addEventListener('mouseup', function() {
        button.style.background = '';
        button.style.boxShadow = ''; // Revert to the original state
    });
});

let selectPlan = document.querySelector('.planAlert a');

selectPlan.addEventListener('click', function(){
    selectPlan.style.boxShadow = '0px 2px 1.5px 0px #E2E2E2 inset';
})