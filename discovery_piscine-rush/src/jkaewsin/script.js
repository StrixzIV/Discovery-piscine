let active = 'home';

$('document').ready(() => {

    const navitem = $('#nav').children()

    navitem[0].className = 'active'

    navitem[0].onclick = () => {
        navitem[0].className = 'active'
        navitem[1].className = ''
    }

    navitem[1].onclick = () => {
        navitem[0].className = ''
        navitem[1].className = 'active'
    }

    window.addEventListener('scroll', () => {

        if (window.scrollY < $('#about').offset().top) {
            navitem[0].className = 'active'
            navitem[1].className = ''
        }

        else if (window.scrollY >= $('#about').offset().top) {
            navitem[0].className = ''
            navitem[1].className = 'active'
        }

    })

})
