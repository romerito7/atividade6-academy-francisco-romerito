
Feature: Excluir Usuarios
    Como um usuário Crud Front End
    Desejo informar o id de um usuario
    Para removelo do sistema

Background:Acessar a pagina de criar usuario
    Given acessei a pagina inicial

Scenario: Deve ser possivel excluir um usuário
    When clico no botão excluir
    And confirmo a exclusao
    Then visualizo a confirmacao de exclusao

   