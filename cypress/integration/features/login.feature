Feature: Login
    Como um usuário do BugBank
    Desejo realizar login em minha conta
    Para ter acesso às funcionalidades do Banco

    Background: Acessar a tela de login
        Given acessei a tela de login

    Scenario: Não deve ser possível efetuar login com usuário inexistente
        When informo os dados do usuário inexistente
        | email | fake@teste.com |
        | senha | 1234           |
        Then visualizo uma mensagem de erro de login "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"

    Scenario: Deve ser possível realizar login com dados válidos
        When informo os dados do usuário válido
        | email | i@t.com |
        | senha | 1234    |
        Then visualizar a tela de conta
