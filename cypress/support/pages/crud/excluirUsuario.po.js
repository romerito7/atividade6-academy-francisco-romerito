
class ExcluirUsuario {


    botaoExcluir = ':nth-child(1) > .sc-dmRaPn > [data-test="userDataDelete"]' 
    botaoComfirmar = "Confirmar"
    

    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
        
    }

    excluir(){
        
        cy.get(this.botaoExcluir).click();
        
    }

    confirmarExclusao(){
        cy.contains(this.botaoComfirmar).click();


    }
    confirmacao(){
        cy.contains("Usuário removido!").should("be.visible");


    }


}

export var excluirUsuario = new ExcluirUsuario();