import FiliacaoElements from "../elements/FiliacaoElements"

const filiacaoElements = new FiliacaoElements;

class FiliacaoPage{
    confirmacao(){
        cy.get(filiacaoElements.boasVindas()).should('be.visible')
    }
}

export default FiliacaoPage;