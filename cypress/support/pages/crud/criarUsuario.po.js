
class CriarUsuario {

    linkNovo = "Novo";
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";
    botaoSalvar = "Salvar";
    random = (Date.now());
    
    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    clicarNovo(){
        cy.contains(this.linkNovo).click();

    }



    preencherCampos(nome,email){
        cy.get(this.inputNome).type(nome);
        cy.get(this.inputEmail).type(email);
        

    }
    preencherCamposNovo(nome,email){
        cy.get(this.inputNome).type('{selectall}{backspace}').type(nome);
        cy.get(this.inputEmail).type('{selectall}{backspace}').type(this.random+email);
        

    }

    clicarSalvar(){

        cy.contains(this.botaoSalvar).click();

    }

    verificaErro(mensagemErro){

        cy.contains(mensagemErro).should("be.visible");


    }

    confirmacao(){
        cy.contains("Usuário salvo com sucesso!").should("be.visible");


    }

}

export var criarUsuario = new CriarUsuario();