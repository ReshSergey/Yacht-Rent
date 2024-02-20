"use strict"

window.addEventListener('DOMContentLoaded', () => {

    //HEADER
    //смена background img в зависимости от времени
    const header = document.querySelector('.header'),
          date = new Date(),
          hours = date.getHours();
    function setHeaderBg(h) {
        if(h < 8 || h > 21) {
            header.classList.add('header_night');
        }
    }
    
    setHeaderBg(hours);

    //MODAL
    const buttonsBooking = document.querySelectorAll('button[data-book]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');

    function showModal() {
        buttonsBooking.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.remove('hide');
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        })
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    modalClose.addEventListener('click', closeModal);

    showModal();

});