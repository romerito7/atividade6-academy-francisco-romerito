import {excluirUsuario} from "../pages/crud/excluirUsuario.po"

beforeEach(() => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {statusCode: 200, body:[
        {
            id: "2996b2a3-ff34-4dd9-a66c-89a8077fa8e6",
            name: "Romerito",
            email: "romerito@example.com",
            createdAt: "2022-04-29T12:24:21.511Z",
            updatedAt: "2022-04-29T12:24:21.511Z",
        },

        {
            id: "2996b2b3-ff34-4dd9-a66c-89a8077fa8e6",
            name: "Romerito2",
            email: "romerito2@example.com",
            createdAt: "2022-04-29T12:24:21.511Z",
            updatedAt: "2022-04-29T12:24:21.511Z",
        },


    ]});


});

Given("acessei a pagina inicial",()=>{
    excluirUsuario.visitar();
})

When("clico no botão excluir",()=>{
    excluirUsuario.excluir();

})

And("confirmo a exclusao",()=>{
    excluirUsuario.confirmarExclusao();
})

And("visualizo a confirmacao de exclusao",()=>{
    excluirUsuario.confirmacao();
})

