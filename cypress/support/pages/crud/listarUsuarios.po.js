import { should } from "chai";

class ListarUsuarios {
    nomeUsuario = "p[data-test='userDataName']"
    usuarios = ".sc-bBrHrO.jmLCKA"

    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    verificarUsuario(nome) {
        cy.contains(this.nomeUsuario, nome);
    }

    verificarListaUsuarios() {
        cy.get(this.usuarios).contains("Nome")


    }

    


}

export var listarUsuarios = new ListarUsuarios();