
Feature: Atualizar Usuarios
    Como um usuário Crud Front End
    Desejo selecionar um usuario do sistema
    Para alterar seu dados

Background: Acessar a tela de atualizar usuario
    Given acessei a pagina inicial
    And clico no botao ver detalhes de um usuario
    Then clico no botao editar

Scenario: Atualizando um usuario
    When informo os dados de nome e email
        | nome  | nome Novo |
        | email | emailNovo@email.com  |
    Then clico no botao salvar

    
Scenario: Atualizando um usuario com email inválido
    When informo os dados de nome e email
        | nome  | nome Novo |
        | email | emailNovoaemail.com  |
    Then visualizo a mensagem de erro "Formato de e-mail inválido"
    
Scenario: Atualizando um usuario com email existente
    When informo os dados de nome e email
        | nome  | nome Novo |
        | email | 1234@123.com  |
    Then visualizo a mensagem de erro "Este e-mail já é utilizado por outro usuário."


Scenario:Atualizando um usuario com mais de 100 caracteres
    When informo os dados de nome e email
        | nome  | abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij |
        | email | 1234@123.com  |
    Then visualizo a mensagem de erro "Informe no máximo 100 caracteres para o nome"

 Scenario:Atualizando um email com mais de 60 caracteres
    When informo os dados de nome e email
    | nome  | abcdefghi                                                                                                            |
    | email | jabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij12345@123.com   |
    Then visualizo a mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    
    


    
