import './scss/app.scss';
import mainPage from "./main-page";

const content = document.getElementById('content')
const background = document.getElementById('myVideo');

document.addEventListener('mousemove', (evt) => {
    let mouseX = -evt.clientX / 11;
    let mouseY = -evt.clientY / 11;
    // background.style.transform = `translateX()`;
    // background.style.transform = `translateY(${mouseY}px)`;
    background.style.transform = `translate(${mouseX}px, ${mouseY}px)`
})

mainPage(content)