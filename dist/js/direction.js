"use strict"

window.addEventListener('DOMContentLoaded', () => {

    const city = document.querySelectorAll('.direction__select__city'),
          ports = document.querySelectorAll('.direction__port__wrapper'),
          maps = document.querySelectorAll('.direction__map__city');

    let currentCity = 0;
    city[currentCity].style.borderBottom = `4px solid #ffd289`;
          
    city.forEach((item, i) => {
        item.addEventListener('click', () => {
                ports.forEach((port) => port.classList.add('invisible'));
                ports[i].classList.remove('invisible');
                maps.forEach((map) => map.classList.add('invisible'));
                maps[i].classList.remove('invisible');

                city.forEach(item => {
                    item.style.borderBottom = `4px solid #3e5e82`;
                })
                city[i].style.borderBottom = `4px solid #ffd289`;
        });
    });

});