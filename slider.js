let sliderImage = document.querySelectorAll(".plate");
let previousArrow = document.querySelector(".leftArrow");
let nextArrow = document.querySelector(".rightArrow");
let current = 0;

// Reset

function reset() {
    for (let i = 0; i < sliderImage.length; i++) {
        sliderImage[i].style.display = "none";
    }
}

// Left Arrow

function slideLeft() {
    reset();
    sliderImage[current - 1].style.display = "block";
    current--;
}

previousArrow.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImage.length;
    }
    slideLeft()
});

// Right Arrow

function slideRight(){
reset()
sliderImage[current + 1].style.display = "block"
current++
}

nextArrow.addEventListener('click',function(){
if(current === sliderImage.length -1){
    current = -1
}
slideRight()
})
