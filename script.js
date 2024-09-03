let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    if (n > slides.length) {
        slideIndex = slides.length;
    } else if (n < 1) {
        slideIndex = 1;
    } else {
        slideIndex = n;
    }

    // 모든 슬라이드를 숨기기
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 현재 슬라이드를 보이도록 설정
    slides[slideIndex - 1].style.display = "block";

    // 첫 번째 슬라이드에서 이전 버튼 숨기기
    if (slideIndex === 1) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    // 마지막 슬라이드에서 다음 버튼 숨기기
    if (slideIndex === slides.length) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

function changeSlide(n) {
    showSlides(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup").style.display = "flex";
    showSlides(slideIndex);
});
