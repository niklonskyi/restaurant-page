export default function mainPage(content) {
    const MAIN = document.createElement('main')
    const HEADER = document.createElement('header')
    const H1 = document.createElement('h1')
    const NAV = document.createElement('nav')
    const A = document.createElement('a')

    MAIN.appendChild(HEADER)
    H1.innerText = 'Ramen Ichiraku';
    // HEADER.appendChild(H1)
    HEADER.appendChild(NAV)
    for (let i = 0; i < 3; i++) {
        NAV.appendChild(A)
    }

    content.appendChild(MAIN)
}