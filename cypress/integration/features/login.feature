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

    @validacoesDeUsuarioNaoExiste
    Scenario Outline: Não deve ser possível efetuar login com usuário inexistente
        When informo os dados do usuário inexistente
        | email | <email> | 
        | senha | <senha> |
        Then visualizo uma mensagem de erro de login "<mensagem>"
        Examples: 
            | email           | senha | mensagem                                                                  |
            | fake@teste.com  | 1234  | Usuário ou senha inválido. Tente novamente ou verifique suas informações! |
            | fruta@teste.com | 1234  | Usuário ou senha inválido. Tente novamente ou verifique suas informações! |

    @loginComSucesso
    Scenario: Deve ser possível realizar login com dados válidos
        When informo os dados do usuário válido
        | email | usuario@fic.com |
        | senha | 1234            |
        Then visualizar a tela de conta
