const formularioLogin = (req, res) => {
    res.render('auth/Login',{
        autenticado: true
    })
}
const formularioRegistro = (req, res) => {
    res.render('auth/Registro',{z
    })
}

export{
    formularioLogin,
    formularioRegistro
}