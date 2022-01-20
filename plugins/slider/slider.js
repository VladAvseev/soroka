/*
options {
    width: num(px),
    images: [img, img, img, img],
    slidesToShow: num,
    slidesToScroll: num,
    btnPrevId: id, //('#id')
    btnNextId: id, //('#id')
}
 */

function sliderCreate(options) {
    const slider = createSliderHTML(options);
    const $slider = slider.html;
    const $btnPrev = document.querySelector(options.btnPrevId);
    const $btnNext = document.querySelector(options.btnNextId);

    let width;
    if (window.screen.width < 426) {
        width = options.mobileWidth;
    } else if (window.screen.width >= 426   ) {
        width = options.width;
    }

    let position = 0;
    const slidesToShow = options.slidesToShow;
    const slidesToScroll = options.slidesToScroll;
    const itemsCount = options.images.length;
    const itemWidth =  width / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    function checkButtons() {
        $btnPrev.disabled = position === 0;
        $btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }

    $btnNext.onclick = function() {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        slider.setPosition(position);
        checkButtons();
    }

    $btnPrev.onclick = function() {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        slider.setPosition(position);
        checkButtons();
    }

    checkButtons();

    return $slider;
}

function createSliderHTML(options) {
    let width;
    if (window.screen.width < 426) {
        width = options.mobileWidth;
    } else {
        width = options.width;
    }
    const $slider = document.createElement('div');
    $slider.classList.add('slider-container');
    $slider.style.width = `${width}px`
    const $track = document.createElement('div');
    $track.classList.add('slider-track');
    options.images.forEach(img => {
        const $img = document.createElement('img');
        $img.src = img;
        $img.style.width = `${width / options.slidesToShow}px`;
        $track.append($img);
    })
    $slider.append($track);
    return {
        html: $slider,
        setPosition: function(position) { $track.style.transform = `translateX(${position}px)` },
    };
}
