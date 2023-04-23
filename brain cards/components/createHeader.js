import { createElement } from "../helper/createElement.js";


export const createHeader = (parent) =>{
const container = createElement('div',{
    className:'container header__container',
});

parent.append(container);

const headerLogoLink=createElement('a',{
    href: '#',
    className: 'header__logo-link',
});

const logo = createElement('img',{
    src: 'img/logo.svg',
    className: 'header__logo',
    alt: 'Логотип сервиса Brain Cards'
});

headerLogoLink.append(logo);

    const headerTittle = createElement('h2', {
        className: 'header__subtitle',
        textContent: 'Категории'
    });

    const headerBtn = createElement('button',{
        className: 'header__btn',
        textContent: 'Добавить категорию'
    });

    container.append(headerLogoLink, headerTittle, headerBtn)

    const updateHeaderTile = title =>{
        headerTittle.textContent = title;
    };
    
    return{headerLogoLink, headerBtn , updateHeaderTile}
};

