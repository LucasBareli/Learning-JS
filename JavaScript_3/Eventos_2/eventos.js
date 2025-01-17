function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = ev.currentTarget.children.username
    const password = ev.currentTarget.children.password
    const passwordConfirmation = ev.currentTarget.children.passwordConfirmation

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + 'registrado!')
    } else {
        alert('As senhas tão diferentes')
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click, register')

function removeListener () {
    button.removeEventListener('click', register)
    alert('Evento removido');
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})