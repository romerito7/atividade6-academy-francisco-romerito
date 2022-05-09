import {listarUsuarios} from "../pages/crud/listarUsuarios.po"


Given("acessei a pagina inicial",()=>{
    listarUsuarios.visitar();
})


Then("visualizo os usuários cadastrados",()=>{
    listarUsuarios.verificarListaUsuarios();


})

Then("visualizo link para cadastrar usuarios",()=>{



})

