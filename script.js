document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");

    function resizePopup() {
        const minDimension = Math.min(window.innerWidth, window.innerHeight);
        popupContent.style.width = `${minDimension * 0.9}px`;
        popupContent.style.height = `${minDimension * 0.9}px`;
    }

    // 초기 팝업 크기 조정
    resizePopup();

    // 윈도우 크기 변경 시 팝업 크기 조정
    window.addEventListener("resize", resizePopup);

    // 팝업을 열어줍니다.
    popup.style.display = "flex";

    // 슬라이드쇼 관련 함수
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

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

        if (slideIndex === 1) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }

        if (slideIndex === slides.length) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    }

    function changeSlide(n) {
        showSlides(slideIndex + n);
    }

    // 초기 슬라이드 표시
    showSlides(slideIndex);
});

