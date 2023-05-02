//Make Slider Range For Character Level Work

//Selecting Slider Range
var sliderRange = document.querySelectorAll(".level-sliders");

//Setting the Slider Range
for (var i = 0; i < sliderRange.length; i++ ) {

    //Select Every Single Part of Slider
    var slider = sliderRange[i].querySelector(".slider");  
    var thumb = sliderRange[i].querySelector(".slider-thumb");  
    var progress = sliderRange[i].querySelector(".slide-progress");
    var levelIndicator = document.querySelector(".level-indication");
    
    //Rest of Code
    function sliderFunction() {
        //Get Percentage
        var maxValue = slider.getAttribute("max");
        var percentage = (slider.value / maxValue) * 100 + "%";
        
        var levelNumber = parseFloat(percentage);

        //Set Thumb and Progress to Slider Percentage
        progress.style.width = percentage;
        thumb.style.left = percentage;

        //If Level Number is Greater than 90 then display only 90
        if (percentage > 90) {
            levelIndicator.value = 90;
        } else {
        //Let Level Number Show Beside Slider
        levelIndicator.value = Math.floor(levelNumber);
        };
    }

    sliderFunction();

    //Activate the Function when when slider is selected
    slider.addEventListener("input", () => {
        sliderFunction();
    });
}


//Make Slider Range For Character Skill Level Work

//Selecting Skill Slider Range
var Skill_sliderRange = document.querySelectorAll(".skill-sliders");

//Setting the Skill Slider Range
for (var a = 0; a < Skill_sliderRange.length; a++ ) {

    //Select Every Single Part of Slider
    var skillSlider = Skill_sliderRange[a].querySelector(".skill-slider");  
    var skillThumb = Skill_sliderRange[a].querySelector(".skill-thumb");  
    var skillProgress = Skill_sliderRange[a].querySelector(".skill-progress");
    var Skill_levelIndicator = document.querySelector(".skill-level-indication");
    
    //Rest of Code
    function Skill_sliderFunction() {
        //Get Percentage
        var skill_maxValue = skillSlider.getAttribute("max");
        var skill_percentage = (skillSlider.value / skill_maxValue) * 100 + "%";
        
        var Skill_levelNumber = parseFloat(skill_percentage);

        //Set Thumb and Progress to Slider Percentage
        skillProgress.style.width = skill_percentage;
        skillThumb.style.left = skill_percentage;

        //Let Skill Level Number Show Beside Slider
        Skill_levelIndicator.value = Math.floor(Skill_levelNumber);
    }

    Skill_sliderFunction();

    //Activate the Function when when slider is selected
    skillSlider.addEventListener("input", () => {
        Skill_sliderFunction();
    });
}




// //Make Image follow Cursor

// var char_image = document.getElementsByClassName("character-image");

// document.onmousemove = function moveImage() {
//     var mouse_X_axis = event.clientX * 10 / innerWidth + "%";
//     var mouse_Y_axis = event.clientY * 10 / innerHeight + "%";

//     for (var i = 0; i < 2; i++) {
//         char_image[i].style.left = mouse_X_axis;
//         char_image[i].style.top = mouse_Y_axis;

//         char_image[i].style.transform = "translate(-" + mouse_X_axis + ", - " + mouse_Y_axis + ")";
//     }
// }
