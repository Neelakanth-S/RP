var menu = document.querySelectorAll(".nav-menu a");
//console.log(menu);
for (var i = 0; i<menu.length; i++) {
    menu[i].addEventListener("click", function (event) {
        event.preventDefault();
        var SectionId = this.textContent.trim().toLowerCase();
        var section = document.getElementById(SectionId);
        console.log(section);
        var interval = setInterval(function () {
            var coordinates = section.getBoundingClientRect();
            if (coordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50); 
        }, 20);
        
    });
}
//Auto fill skill  Bars

var progress = document.querySelectorAll('.skill-progress >div');
//console.log(progress);
var skillSection= document.getElementById('skill-container');
//console.log(skillSection);
function initialBars(){
    for(let bar of progress){
        bar.style.width = 0 +'%';
    }
}
initialBars();
function fillBars(){
    for(let bar of progress){
        let targetWidth =bar.getAttribute('data-bar-width');
        //console.log(targetWidth);
        let currentWidth=0;
        var interval= setInterval(function(){
            if(currentWidth>targetWidth){
            clearInterval(interval);
            return;}
            currentWidth++;
            bar.style.width=currentWidth + '%';
        },2);
    }
}
var  reached=false;
function checkScroll(){
    var coordinate = skillSection.getBoundingClientRect();
    if(!reached&&coordinate.top<=window.innerHeight){
        fillBars();
        reached=true;
    }
    else if(coordinate.top>window.innerHeight){
          reached=false;
          fillBars();

    }
}

window.addEventListener('scroll', checkScroll);


// percentage scroll
var scrolledBar= document.getElementById('percent');
// This function will return the maximum of the following 

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight
    );
}



var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function (e) {
    docHeight = getDocHeight();
    windowHeight = window.innerHeight;
};



// This function uses a for loop for individual progress bars. You can modify it so that it applies to the whole skill section at once
function setScrolled() {
    
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    
    scrolledBar.textContent = scrolled+'%';
    
}

window.addEventListener('scroll', setScrolled);