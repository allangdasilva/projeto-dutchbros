function loading() {
    const loader = document.getElementById('preload').style.display = 'none'
    const container = document.getElementById('container-base').style.display = 'block'
}

function toggle() {
    const menu = document.getElementById('menu')
    menu.classList.toggle('active')
    const btn = document.getElementById('btn')
    btn.classList.toggle('active')
}