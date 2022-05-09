
class CriarUsuario {

    linkNovo = "Novo";
    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";
    botaoSalvar = "Salvar";
    
    
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

    clicarSalvar(){

        cy.contains(this.botaoSalvar).click();

    }

    verificaErro(mensagemErro){

        cy.contains(mensagemErro).should("be.visible");


    }

}

export var criarUsuario = new CriarUsuario();