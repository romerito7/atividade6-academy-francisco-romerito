import {atualizarUsuario} from "../pages/crud/atualizarUsuario.po"

beforeEach(() => {
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
    atualizarUsuario.visitar();
});

And("clico no botao ver detalhes de um usuario", () => {
    atualizarUsuario.clicarVerDetalhaes();
});

Then("clico no botao editar", () => {
    atualizarUsuario.clicarEditar();
});

When("informo os dados de nome e email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

Then("clico no botao salvar", () => {
    atualizarUsuario.clicarSalvar();
});

Then("visualizo a mensagem de erro {string}", (mensagemErro) => {
    atualizarUsuario.clicarSalvar();
    atualizarUsuario.verificaErro(mensagemErro);
});