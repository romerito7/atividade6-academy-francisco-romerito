
class ExcluirUsuario {


    botaoExcluir = '.sc-kgflAQ.vggQs' 
    botaoComfirmar = "Confirmar"
    confirmacaoExclusao = ".go3958317564"

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