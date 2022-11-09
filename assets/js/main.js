/*=============== SHOW SOCIAL NETWORKS ===============*/
const showSocial = (toggle, specialCard) => {
    const toggle = document.getElementById('toggleCard'),
        social = document.getElementById('socialCard')

    toggle.addEventListener('click', () => {
        social.classList.toggle("animation")
    })
}
showSocial("card-toggle", "card-social")