const interior = [
    'img/elements/interior-1.jpg',
    'img/elements/interior-2.jpg',
    'img/elements/interior-3.jpg',
    'img/elements/interior-4.jpg',
]

function createAboutSlider() {
    const $aboutSlider = sliderCreate({
        width: 600,
        mobileWidth: 1120,
        images: interior,
        slidesToShow: 1,
        slidesToScroll: 1,
        btnPrevId: '#about-prev',
        btnNextId: '#about-next',
    })

    document.querySelector('.about-wrapper').append($aboutSlider);
}

const services = [
    {title: 'Парикмахер', url: 'img/service/service-1.jpg'},
    {title: 'Бровист', url: 'img/service/service-2.jpg'},
    {title: 'Дапиляция', url: 'img/service/service-3.jpg'},
    {title: 'Макияж', url: 'img/service/service-4.jpg'},
    {title: 'Педикюр', url: 'img/service/service-5.jpg'},
    {title: 'Маникюр', url: 'img/service/service-6.jpg'},
    {title: 'Окрашивание', url: 'img/service/service-7.jpg'},
    {title: 'Восстановление волос', url: 'img/service/service-8.jpg'},
];

function createServiceList(services) {
    const serviceBlock = document.querySelector('.service');
    services.forEach(service => {
        const $service = document.createElement('div');
        $service.classList.add('service-item');
        $service.insertAdjacentHTML('beforeend',`
                <img class="service-photo" src="${service.url}" alt="photo">
                <div class="service-content">
                    <div class="service-title">${service.title}</div>
                </div>
        `)
        serviceBlock.append($service);
    })
}

const team = [
    {
        name: 'Элла Свилель',
        prof: 'МАСТЕР МАНИКЮРА',
        info: 'Мастре-проффесионал по маникюру и моделированию ногтей с 15-летним опытом работ.' +
            ' Обладатель более 40 сертификатом и дипломов в области маникюра и дизайна.' +
            ' Основатель и художественный руководитель студии СОРОКА.',
        photo: 'img/team/ella.jpg',
        instagram: 'https://www.instagram.com/soroka_beauty_studio_/?hl=ru',
        bumpix: 'https://bumpix.net/40092',
    }
];

function createTeamList(team) {
    const teamBlock = document.querySelector('.team');
    team.forEach(person => {
        const $teamItem = document.createElement('div');
        $teamItem.classList.add('team-item');
        $teamItem.insertAdjacentHTML('beforeend', `
            <img  class="team-photo" src="${person.photo}" alt="team photo">
            <div class="team-name">${person.name}</div>
            <div class="team-prof">${person.prof}</div>
            <div class="team-text">${person.info}</div>
            <div class="social">
                <a class="social-icon" href="${person.instagram}"><img class="social-icon-img" src='img/elements/color-instagram-icon.png' alt="inst"></a>
                <a class="social-btn" href="${person.bumpix}">онлайн запись</a>
            </div>
        `);
        teamBlock.append($teamItem);
    })
}


const worksButtons = [
    {
        btnPrevId: 'manicure-left',
        btnNextId: 'manicure-right',
        wrapperId: 'manicure-wrapper',
    },
    {
        btnPrevId: 'pedicure-left',
        btnNextId: 'pedicure-right',
        wrapperId: 'pedicure-wrapper',
    },
    {
        btnPrevId: 'haircut-left',
        btnNextId: 'haircut-right',
        wrapperId: 'haircut-wrapper',
    },
    {
        btnPrevId: 'makeup-left',
        btnNextId: 'makeup-right',
        wrapperId: 'makeup-wrapper',
    },
]
function createWorkButtons() {
    worksButtons.forEach(btns => {
        const $workBlock = document.createElement('div');
        $workBlock.classList.add('work-block');

        const $prevBtn = document.createElement('button');
        $prevBtn.classList.add('work-btn');
        $prevBtn.id = btns.btnPrevId;
        $prevBtn.insertAdjacentHTML('beforeend', `<img class="work-btn-image" src="img/elements/left-arrow.png" alt="arrow">`);

        const $nextBtn = document.createElement('button');
        $nextBtn.classList.add('work-btn');
        $nextBtn.id = btns.btnNextId;
        $nextBtn.insertAdjacentHTML('beforeend', `<img class="work-btn-image" src="img/elements/right-arrow.png" alt="arrow">`);

        const $workWrapper = document.createElement('div');
        $workWrapper.id = btns.wrapperId;

        $workBlock.append($prevBtn);
        $workBlock.append($workWrapper);
        $workBlock.append($nextBtn);
        document.querySelector('.work').append($workBlock);
    })
}


const manicure = [
    'img/works/manicure-1.jpg',
    'img/works/manicure-2.jpg',
    'img/works/manicure-3.jpg',
    'img/works/manicure-4.jpg',
    'img/works/manicure-5.jpg',
    'img/works/manicure-6.jpg',
];

const pedicure = [
    'img/works/pedicure-1.PNG',
    'img/works/pedicure-2.jpg',
    'img/works/pedicure-3.jpg',
    'img/works/pedicure-4.jpg',
    'img/works/pedicure-5.jpg',
    'img/works/pedicure-6.jpg',
];

const haircut = [
    'img/works/haircut-1.jpg',
    'img/works/haircut-2.jpg',
    'img/works/haircut-3.jpg',
    'img/works/haircut-4.jpg',
    'img/works/haircut-5.jpg',
    'img/works/haircut-6.jpg',
];

const makeup = [
    'img/works/makeup-1.jpg',
    'img/works/makeup-2.jpg',
    'img/works/makeup-3.jpg',
    'img/works/makeup-4.jpg',
    'img/works/makeup-5.jpg',
    'img/works/makeup-6.jpg',
];

function createWorkSliders() {
    const $manicureSlider = sliderCreate({
        width: 900,
        mobileWidth: 900,
        images: manicure,
        slidesToShow: 3,
        slidesToScroll: 1,
        btnPrevId: `#${worksButtons[0].btnPrevId}`,
        btnNextId: `#${worksButtons[0].btnNextId}`,
    })

    const $pedicureSlider = sliderCreate({
        width: 900,
        mobileWidth: 900,
        images: pedicure,
        slidesToShow: 3,
        slidesToScroll: 1,
        btnPrevId: `#${worksButtons[1].btnPrevId}`,
        btnNextId: `#${worksButtons[1].btnNextId}`,
    })

    const $haircutSlider = sliderCreate({
        width: 900,
        mobileWidth: 900,
        images: haircut,
        slidesToShow: 3,
        slidesToScroll: 1,
        btnPrevId: `#${worksButtons[2].btnPrevId}`,
        btnNextId: `#${worksButtons[2].btnNextId}`,
    })

    const $makeupSlider = sliderCreate({
        width: 900,
        mobileWidth: 900,
        images: makeup,
        slidesToShow: 3,
        slidesToScroll: 1,
        btnPrevId: `#${worksButtons[3].btnPrevId}`,
        btnNextId: `#${worksButtons[3].btnNextId}`,
    })


    const worksSliders = [
        {
            $slider: $manicureSlider,
            wrapperId: worksButtons[0].wrapperId,
        },
        {
            $slider: $pedicureSlider,
            wrapperId: worksButtons[1].wrapperId,
        },
        {
            $slider: $haircutSlider,
            wrapperId: worksButtons[2].wrapperId,
        },
        {
            $slider: $makeupSlider,
            wrapperId: worksButtons[3].wrapperId,
        },
    ];

    worksSliders.forEach(slider => {
        const wrapper = document.querySelector(`#${slider.wrapperId}`);
        wrapper.insertAdjacentElement('beforeend', slider.$slider);
    })
}

let priceListModal
function createPriceModal() {
    priceListModal = modal.modal({
        title: 'Цены',
        closable: true,
        content: `
        <div class="price">
            <button class="price-btn" id="price-prev"><img class="about-btn-img" src="img/elements/left-arrow.png"></button>
            <div class="price-wrapper"></div>
            <button class="price-btn" id="price-next"><img class="about-btn-img" src="img/elements/right-arrow.png"></button>
        </div>
    `,
        footerButtons: [
            {text: 'Назад', type: 'modal-footer-btn', handler() {
                    priceListModal.close();
                }},
        ]
    })
}

const prices = [
    'img/service/price-1.jpg',
    'img/service/price-2.jpg',
    'img/service/price-3.jpg',
    'img/service/price-4.jpg',
]

function createPriceSlider() {
    const $priceSlider = sliderCreate({
        width: 360,
        mobileWidth: 600,
        images: prices,
        slidesToShow: 1,
        slidesToScroll: 1,
        btnPrevId: '#price-prev',
        btnNextId: '#price-next',
    })

    document.querySelector('.price-wrapper').append($priceSlider);
}

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn;
    switch (btnType){
        case 'price-list': {
            priceListModal.open();
            break;
        }
        case 'change-promotion': {
            changePromotionFormModal.open();
            break;
        }
        case 'logout': {
            document.querySelector('.worker-page').style.display ='none';
        }
    }
})

function delay(ms) {
    return new Promise((resolve) => {
            setTimeout(() => resolve(), ms)
        }
    )
}

function render() {
    createAboutSlider();
    createServiceList(services);
    createTeamList(team);
    createWorkButtons();
    createWorkSliders();
    createPriceModal();
    createPriceSlider();
}

function startWork() {
    render();
    let index = 0;
    const images = document.querySelectorAll('img');
    let imgInterval = setInterval(() => {
        let result = true
        for (let i = 0; i < images.length; i++) {
            if (!images[i].complete) {
                result = false;
            } else {
                if (i > index) {
                    index = i;
                    const load = (i + 1) / images.length * 100;
                    document.querySelector('.loader-line').style.width = `${load}%`;
                    console.log(`картинка ${i + 1} загружена`)
                    console.log(`${load}%`);
                }
            }
        }
        if (result) {
            clearInterval(imgInterval);
            document.querySelector('.loader').style.display = 'none';
        }
    }, 100)
}

startWork();

