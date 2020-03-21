(function () {
    'use strict';
    const app = document.querySelector('#app');
    const slider = document.createElement('div');
    slider.classList.add("slider");
    app.appendChild(slider);

    const imgPaths = ["./resources/img/ps1.jpg", "./resources/img/ps2.jpg", "./resources/img/ps3.jpg"];
    const imgNodes = [];

    imgPaths.forEach((data, idx) => {
        let wrapper = document.createElement('div');
        let tempImg = document.createElement('img');
        tempImg.src = data;
        wrapper.appendChild(tempImg);
        wrapper.classList.add('slide_item');
        if (idx == 0)  {
            wrapper.classList.add('showing');
        }
        imgNodes.push(wrapper);
    });

    imgNodes.forEach((data) => {
        slider.appendChild(data);
    });

    const slideShow = function () {
        let currentSlide = document.querySelector('.slide_item.showing') || document.querySelector('.slide_item:first-child');
        let nextSlide = currentSlide.nextElementSibling || document.querySelector('.slide_item:first-child');
        let prevSlide = document.querySelector('.prev');

        if (prevSlide) {
            prevSlide.classList.remove('prev');
            prevSlide.classList.remove('showing');
        }

        if (currentSlide.classList.contains('showing')) {
            currentSlide.classList.add('prev');
            nextSlide.classList.add('showing');
            currentSlide.classList.remove('showing');
        } else {
            currentSlide.classList.add('showing');
        }
    };

    // inteval 관련 추가
    let itv;
    window.play = function() {
        if(!!itv) {
            clearInterval(itv);
        }
        itv = setInterval(slideShow, 2000);
    };

    window.stop = function() {
        clearInterval(itv);
    };

    window.play();
})();