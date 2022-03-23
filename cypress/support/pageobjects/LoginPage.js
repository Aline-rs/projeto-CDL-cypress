import LoginElements from "../elements/LoginElements"
const loginElements = new LoginElements;

class LoginPage {

    clickCampoAssociado(){
        cy.get(loginElements.campoAssociado()).click();
        cy.wait(3000)
    }

    preencherCampos(username, senha){
        cy.get(loginElements.campoAssociado()).type(username)
        cy.wait(3000)
        cy.get(loginElements.campoSenha()).type(senha)
        cy.wait(3000)
    }

    clickBotaoEntrar(){
        cy.get(loginElements.botaoEntrar()).click();
    }
}

export default LoginPage;