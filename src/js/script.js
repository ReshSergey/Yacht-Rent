"use strict"

window.addEventListener('DOMContentLoaded', () => {

    //Navigation Menu Button

    const nav = document.querySelector('.nav'),
          menuBtn = document.querySelector('.nav__menu-button'),
          menuList = document.querySelector('.nav__list'),
          menuSocial = document.querySelector('.nav__social'),
          menuToggle = document.querySelectorAll('.nav-menu-btn');
    
    const menuButton = document.createElement('div');

    menuButton.innerHTML = `
        <button class="button button_color" data-book>Оставить заявку</button>
    `;

//nav-menu-btn
    function showMenu() {
            menuBtn.style.cssText = `top: 40px`;
            nav.classList.add('nav-menu-active');
            nav.style.cssText = `
                flex-direction: column;
                padding: 0;
                padding-top: 56px;
                padding-bottom: 45px;
                height: 100svh;
            `;
            menuList.style.cssText = `
                display: flex;
                flex-direction: column;
                gap: 26px;
                margin-top: 50px;
            `;
            menuList.append(menuButton);
            menuSocial.style.display = 'flex';
    }

    function hideMenu() {
            menuBtn.style.cssText = ``;
            nav.classList.remove('nav-menu-active');
            nav.style.cssText = ``;
            menuList.style.cssText = ``;
            menuButton.remove();
            menuSocial.style.display = '';
    }

    menuBtn.addEventListener('click', ()=> {
        if (nav.classList.contains('nav-menu-active')) {
            hideMenu();
        } else {
            showMenu();
        }
    });


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

    

    // //MODAL
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


    const city = document.querySelectorAll('.direction__city'),
          port = document.querySelectorAll('.direction__select__port__container');

    city.forEach(item => {
        item.classList.toggle = port.forEach(item => {
            item.classList.toggle = 'unvisible'
        })
    });

});