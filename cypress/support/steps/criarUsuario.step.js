import {criarUsuario} from "../pages/crud/criarUsuario.po"


before(() => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {statusCode: 200, body:[
        {
            id: "2996b2a3-ff34-4dd9-a66c-89a8077fa8e6",
            name: "Romerito",
            email: "romerito@example.com",
            createdAt: "2022-04-29T12:24:21.511Z",
            updatedAt: "2022-04-29T12:24:21.511Z",
        },

        {
            id: "2996b2b3-ff34-4dd9-a66c-89a8077fa8e6",
            name: "Romerito2",
            email: "romerito2@example.com",
            createdAt: "2022-04-29T12:24:21.511Z",
            updatedAt: "2022-04-29T12:24:21.511Z",
        },


    ]});


});

Given("acessei a pagina inicial", () => {
    criarUsuario.visitar();
});

And("Clico no link novo", () => {
    criarUsuario.clicarNovo();
});

When("informo os dados do usuário inexistente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

Then("clico em salvar", () => {
    criarUsuario.clicarSalvar();
    cy.wait(1000);
});

When("Cadastrar usuario com e-mail invalido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

When("informo nome e um email inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

Then("visualizo a mensagem de erro {string}", (mensagemErro) => {
    criarUsuario.clicarSalvar();
    criarUsuario.verificaErro(mensagemErro);
});

When("informo nome e um email existente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

When("informo um nome com mais de 100 caracteres e um email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

When("informo nome e um email com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

