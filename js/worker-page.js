let promtion = {
    title: '',
    text: '',
    date: '',
}

function render(action) {
    document.querySelector('.promotion-title').innerHTML = action.title;
    document.querySelector('.promotion-text').innerHTML = action.text;
    document.querySelector('.promotion-date').innerHTML = action.date;
}

function start() {
    loginFormModal.open();
}

render(promtion);

const loginFormModal = modal.modal({
    title: 'Войти в аккаунт',
    closable: true,
    content: `
        <div style="display: flex">
            <label for="login">Логин:</label>
            <input class="modal-input" id="login" type="text">
        </div>
        <br><br>
        <div style="display: flex">
            <label for="password">Пароль:</label>
            <input class="modal-input" id="password" type="text">
        </div>
    `,
    footerButtons: [
        {text: 'Войти', type: 'modal-footer-btn', handler() {
                const loginText = document.querySelector('#login').value;
                const passwordText = document.querySelector('#password').value;
                if (loginText === '1234' && passwordText === '1234') {
                    document.querySelector('.worker-page').style.display = 'block'
                    loginFormModal.close();
                }
                document.querySelector('#login').value = '';
                document.querySelector('#password').value = '';
            }},
        {text: 'Отмена', type: 'modal-footer-btn', handler() {
                loginFormModal.close();
            }},
    ]
})

const changePromotionFormModal = modal.modal({
    title: 'Изменить акцию',
    closable: false,
    content: `
        <label for="promotion-title">Название:</label>
        <input class="modal-input" id="promotion-title" type="text">
        <br>
        <label for="promotion-text">Текст:</label>
        <textarea class="modal-input" id="promotion-text"></textarea>
        <br>
        <label for="promotion-date">Дата:</label>
        <input class="modal-input" id="promotion-date" type="text">
    `,
    footerButtons: [
        {text: 'Изменить', type: 'modal-footer-btn', handler() {
                promtion.title = document.querySelector('#promotion-title').value;
                promtion.text = document.querySelector('#promotion-text').value;
                promtion.date = document.querySelector('#promotion-date').value;
                render(promtion);
                document.querySelector('#promotion-title').value = promtion.title
                document.querySelector('#promotion-text').value = promtion.text;
                document.querySelector('#promotion-date').value = promtion.date;
                changePromotionFormModal.close();
            }},
        {text: 'Отмена', type: 'modal-footer-btn', handler() {
                changePromotionFormModal.close();
            }},
    ]
})

// document.addEventListener('click', event => {
//     const btnType = event.target.dataset.btn;
//     switch (btnType){
//         case 'change-promotion': {
//             changePromotionFormModal.open();
//             break;
//         }
//         case 'logout': {
//             document.querySelector('.worker-page').style.display ='none';
//         }
//     }
// })