import { createHeader } from "./components/createHeader.js";

const initApp = () =>{
    const headerParent = document.querySelector('.header')
    const app = document.querySelector('#app')

    const headerObj = createHeader(headerParent);
    
    const returnIndex = e => {
        e.preventDefault();
        headerObj.updateHeaderTile('Категории')
    }

    headerObj.headerLogoLink.addEventListener('click',returnIndex);

    headerObj.headerBtn.addEventListener('click',() => {
    headerObj.updateHeaderTile('Новая категория');
    });
};

initApp();