import {atualizarUsuario} from "../pages/crud/atualizarUsuario.po"

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