import {atualizarUsuario} from "../pages/crud/atualizarUsuario.po"


Given("acessei a pagina inicial", () => {
    atualizarUsuario.visitar();
});

And("clico no botao ver detalhes de um usuario", () => {
    atualizarUsuario.clicarVerDetalhes();
});

Then("clico no botao editar", () => {
    atualizarUsuario.clicarEditar();
});

When("informo os dados de nome e email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

When("informo os dados de nome e um email novo", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarUsuario.preencherCamposNovo(dadosTabela.nome, dadosTabela.email);
});

When("informo os dados de nome e email existente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarUsuario.preencherCampos(dadosTabela.nome, dadosTabela.email);
});

And("clico no botao salvar", () => {
    atualizarUsuario.clicarSalvar();
});

Then("visualizo a mensagem de erro {string}", (mensagemErro) => {
    atualizarUsuario.clicarSalvar();
    atualizarUsuario.verificaErro(mensagemErro);
});

Then("visualizo a confirmacao de alteracao", () => {
    atualizarUsuario.confirmacao();
});
