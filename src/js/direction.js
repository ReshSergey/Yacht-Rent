"use strict"

window.addEventListener('DOMContentLoaded', () => {

    const city = document.querySelectorAll('.direction__select__city'),
          ports = document.querySelectorAll('.direction__port__wrapper'),
          maps = document.querySelectorAll('.direction__map__city');
    
        city.forEach((item, i) => {
            item.addEventListener('click', () => {
                ports.forEach((port) => port.classList.add('invisible'));
                ports[i].classList.remove('invisible');
                maps.forEach((map) => map.classList.add('invisible'));
                maps[i].classList.remove('invisible');              
            });
        });

});