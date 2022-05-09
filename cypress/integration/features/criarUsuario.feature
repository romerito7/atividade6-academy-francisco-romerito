
Feature: Criar Usuarios
    Como um usuário Crud Front End
    Desejo informar os dados de um novo usuario
    Para cria-lo no sistema

Background:Acessar a pagina de criar usuario
    Given acessei a pagina inicial
    And Clico no link novo

Scenario: Deve ser possivel cadastrar um usuário
    When informo os dados do usuário inexistente
        | nome  | nome inexistente |
        | email | email@email.com  |
    Then clico em salvar    
    

Scenario:Cadastrar usuario com e-mail invalido
    When informo nome e um email inválido
        | nome  | nome inexistente |
        | email | emaildemaildcom  |
    Then visualizo a mensagem de erro "Formato de e-mail inválido"
        

Scenario:Cadastrar usuario com e-mail existente
    When informo nome e um email existente
    | nome  | asdf          |
    | email | 1234@123.com  |
    Then visualizo a mensagem de erro "Este e-mail já é utilizado por outro usuário."

Scenario:Cadastrar usuario com mais de 100 caracteres
    When informo um nome com mais de 100 caracteres e um email
    | nome  | abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij        |
    | email | 12345@123.com                                                                                                         |
    Then visualizo a mensagem de erro "Informe no máximo 100 caracteres para o nome"

 Scenario:Cadastrar email com mais de 60 caracteres
    When informo nome e um email com mais de 60 caracteres
    | nome  | abcdefghi                                                                                                            |
    | email | jabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij12345@123.com   |
    Then visualizo a mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    

