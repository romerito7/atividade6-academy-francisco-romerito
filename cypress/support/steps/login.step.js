import { loginPage } from "../pages/LoginPage.po";

beforeEach(() => {
    cy.mockarUsuario();
});

Given("acessei a tela de login", () => {
    loginPage.visitar();
});

When("informo os dados do usuário inexistente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    loginPage.preencherFormularioELogar(dadosTabela.email, dadosTabela.senha);
});

Then("visualizo uma mensagem de erro de login {string}", (mensagemErro) => {
    cy.contains(mensagemErro).should("be.visible");
});

When("informo os dados do usuário válido", () => {});

Then("visualizar a tela de conta", () => {});