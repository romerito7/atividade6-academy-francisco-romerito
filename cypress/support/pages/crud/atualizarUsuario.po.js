class AtualizarUsuario{

    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";
    random = (Date.now());

    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
        
    }

    clicarVerDetalhes(){
        cy.contains("Ver detalhes").click();


    }

    clicarEditar(){
        cy.contains("Editar").click();


    }

    preencherCamposNovo(nome,email){
        cy.get(this.inputNome).type('{selectall}{backspace}').type(nome);
        cy.get(this.inputEmail).type('{selectall}{backspace}').type(this.random+email);
        

    }
    preencherCampos(nome,email){
        cy.get(this.inputNome).type('{selectall}{backspace}').type(nome);
        cy.get(this.inputEmail).type('{selectall}{backspace}').type(email);
        

    }

    clicarSalvar(){
        cy.contains("Salvar").click();


    }


    verificaErro(mensagemErro){

        cy.contains(mensagemErro).should("be.visible");


    }

    confirmacao(){
        cy.contains("Informações atualizadas com sucesso!").should("be.visible");


    }



} 
export var atualizarUsuario = new AtualizarUsuario();