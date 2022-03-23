//Classe que contém todos os elementos referente a página de login.

class LoginElements {

    campoAssociado = () => {return '#usuario'}
    campoSenha = () => {return '#senha'}
    esqueciSenha = () => {return '.esqueci'}

    botaoEntrar = () => {return '#loginAfiliado > .row > .col-md-5 > .btn'}
    botaoClose = () => {return '.close > span'}
}

export default LoginElements;