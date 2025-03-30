var dress = document.querySelector('#dress')
var btn = document.querySelector('#shopwala button')

btn.addEventListener('click', () => {
    let color1 = Math.floor(Math.random() * 255)
    let color2 = Math.floor(Math.random() * 255)
    let color3 = Math.floor(Math.random() * 255)

    dress.style.backgroundColor = `rgb(${color1},${color2},${color3})`
})