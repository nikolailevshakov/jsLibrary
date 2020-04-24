'use strict';
const modals = () => {
    function goModal (modal) {
        const modalWindow = document.querySelectorAll(modal.modalSelector),
              closeBtn = document.querySelector(modal.closeSelector),
              closeOnBg = modal.closeOnBg,
              showOnTime = modal.showOnTime,
              bg = modal.bg,
              scroll = calcScrollBar();

// if there is bg
        let bgModal = null;
        if (bg) {
            bgModal = document.querySelector(modal.bgSelector);
        } else {
            bgModal = document.querySelector(modal.bgSelector);
            bgModal.width = modalWindow.width;
            bgModal.height = modalWindow.height;
        }

// if on time we dont need a trigger
        if (!showOnTime) {
            const startBtn = document.querySelectorAll(modal.triggerSelector);
// after clicking on modal button
            startBtn.forEach((item) => {
                item.addEventListener('click', (event) => {
                    event.preventDefault();
                    modalWindow.forEach((item) => {
                        item.style.display = 'block';
                    });
                    if (bg) {
                        bgModal.style.display = 'block';
                        // remove scroll, while open modal
                        document.body.style.overflow = 'hidden';
                        document.body.style.marginRight = `${scroll}px`;
                    }
                });

            });
        }

// closing modal window
            closeBtn.addEventListener('click', () => {
// let to scroll again
                if (bg) {
                    bgModal.style.display = 'none';
                    document.body.style.overflow = 'initial';
                }
                modalWindow.forEach((item) => {
                    item.style.display = 'none';
                });
                document.body.style.marginRight = `0px`;
            });
            if (bg) {
                // click out of modal and close it 
                bgModal.addEventListener('click', (event) => {
                    // to prevent closing modal on clicking modal
                    if (event.target === bgModal && closeOnBg) {
                            bgModal.style.display = 'none';
                            document.body.style.overflow = 'initial';
                        modalWindow.forEach((item) => {
                            item.style.display = 'none';
                        });
                        document.body.style.marginRight = `0px`;
                    }
                });
            }

// function for showing modal on time
            function showModalByTime (time) {
                setTimeout(function() {
                    modalWindow.forEach((item) => {
                        bgModal.style.display = 'block';
                        bgModal.style.visibility = 'hidden';
                        item.style.visibility = 'visible';
                        item.style.display = 'block';
                    });
                    if (bg) {
                        bgModal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    }
                }, time);
            };
            if (showOnTime) {
                showModalByTime(showOnTime);
            };

// in order for page no to jump after pop up of modal
            function calcScrollBar () {
                let div = document.createElement('div');

                div.style.width = '50px';
                div.style.height = '50px';
                div.style.overflowY = 'scroll';
                div.style.visibility = 'hidden';

                document.body.appendChild(div);
                let scrollWidth = div.offsetWidth - div.clientWidth;
                div.remove();
                return scrollWidth;
            }

    };
// constructor for object-argument
    let ModalUnit = function (triggerSelector, bgSelector, modalSelector, closeSelector, closeOnBg = true, showOnTime = false, bg = true) {
        this.triggerSelector = triggerSelector;
        this.bgSelector = bgSelector;
        this.modalSelector = modalSelector;
        this.closeSelector = closeSelector;
        // condition for closing modal on clicking bg
        this.closeOnBg = closeOnBg;
        // show modal on time
        this.showOnTime = showOnTime;
        // is there bg
        this.bg = bg;
    }
// creating argument
    let modalEx = new ModalUnit('.modal_trigger', '.modal_bg', '.modal_window', '.close_modal', true, false, true);

// call function
    goModal(modalEx);

};

modals();
