/*
options = {
    width,         => number
    title,         => string
    content,       => string with html
    footerButtons, => array of objects
}
 */

Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}


function noop() {}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div');
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('modal-footer');

    buttons.forEach(btn => {
        const $btn = document.createElement('button');
        $btn.textContent = btn.text;
        $btn.classList.add(btn.type || 'modal-footer-btn');
        $btn.onclick = btn.handler || noop;
        wrapper.appendChild($btn);
    })

    return wrapper;
}

class ModalWindow {
    constructor(options) {
        this.width = options.width;
        this.title = options.title;
        this.content = options.content;
        this.footerButtons = options.footerButtons;
    }
}

class HTMLModalWindow extends ModalWindow {
    constructor(options) {
        super(options);
        this.isDestroy = false;
        this.isClosing = false;
        this.listener = event => {
            if (event.target.dataset.close) {
                this.close()
            }
        }
        this.html = this.createModalHTML();
        this.html.addEventListener('click', this.listener);
    }

    createModalHTML() {
        const DEFAULT_WIDTH = 600;
        const $modal = document.createElement('div');
        $modal.classList.add('modal');
        $modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window" style="width: ${this.width || DEFAULT_WIDTH}px">
                <div class="modal-header">
                    <span class="modal-title">${this.title || 'Окно'}</span>
                    <span class="modal-close" data-close="true">&times;</span>
                </div>
                <div class="modal-body" data-content>
                    ${this.content || ''}
                </div>
            </div>
        </div>
        `);
        const footer = _createModalFooter(this.footerButtons);
        footer.appendAfter($modal.querySelector('[data-content]'))
        document.body.appendChild($modal);
        return $modal;
    }

    open() {
        if (this.isDestroy) return;
        !this.isClosing && this.html.classList.add('open');
    }

    close() {
        const ANIMATION_SPEED = 200;
        this.isClosing = true;
        this.html.classList.remove('open');
        this.html.classList.add('hide');
        setTimeout(() => {
            this.html.classList.remove('hide');
            this.isClosing = false;
        }, ANIMATION_SPEED);
    }

    destroy() {
        this.html.parentNode.removeChild(this.html);
        this.html.removeEventListener('click', this.listener);
        this.isDestroy = true;
    }

    setContent(html) {
        this.html.querySelector('[data-content]').innerHTML = html;
    }
}