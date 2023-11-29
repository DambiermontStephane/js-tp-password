const settings = {
    jsEnable: 'js-enabled',
    passwordSelector: document.getElementById('password'),
    showPass: document.querySelector('.showPass'),
}

document.documentElement.classList.add(settings.jsEnable)

const hidePassword = {
    passwordString: 'password',
    textString: 'text',

    init() {
        settings.showPass.addEventListener('click', () => {
            if (settings.passwordSelector.type === this.textString) {
                settings.passwordSelector.type = this.passwordString
            } else {
                settings.passwordSelector.type = this.textString
            }
        })
    }
}

hidePassword.init()