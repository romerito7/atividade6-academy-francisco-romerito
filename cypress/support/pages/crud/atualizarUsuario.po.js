class AtualizarUsuario{

    inputNome = "input[name='name']";
    inputEmail = "input[name='email']";


    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    clicarVerDetalhaes(){
        cy.contains("Ver detalhes").click();


    }

    clicarEditar(){
        cy.contains("Editar").click();


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



} 
export var atualizarUsuario = new AtualizarUsuario();