import HomeElements from "../elements/HomeElements";

const homeElements = new HomeElements;
const url = Cypress.config("baseUrl")

class HomePage {

    acessarSite() {
        cy.visit(url)
        cy.wait(3000)
    }

    clickBotaoLogin() {
        cy.get(homeElements.acessarConta()).click();
    }
}

export default HomePage;