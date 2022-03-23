/// <reference types="cypress"/>
/* /* /* global Given, Then, When */


import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage"
import FiliacaoPage from "../pageobjects/FiliacaoPage";

const homePage = new HomePage;
const loginPage = new LoginPage;
const filiacaoPage = new FiliacaoPage;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  

Given("Acesso o site da CDL", () => {
    homePage.acessarSite();
})

When("acesso a pagina de login", () => {
    homePage.clickBotaoLogin();
})

And("preencho o campo de código do associado {} e senha {}", (username, senha) => {

    loginPage.clickCampoAssociado()
    loginPage.preencherCampos(username, senha)

})

And("clico no botão entrar", () => {
    loginPage.clickBotaoEntrar();
})

Then("devo conseguir logar no site", () => {
    filiacaoPage.confirmacao();
})