import {criarUsuario} from "../pages/crud/criarUsuario.po"


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

