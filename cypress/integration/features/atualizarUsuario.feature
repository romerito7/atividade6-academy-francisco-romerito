
Feature: Atualizar Usuarios
    Como um usuário Crud Front End
    Desejo selecionar um usuario do sistema
    Para alterar seu dados

Background: Acessar a tela de atualizer usuario
    Given acessei a pagina inicial
    And Clico no botao "ver detalhes" de um usuario
    Then visualizo as informações do usuario
    And clico em editar

Scenario: Atualizando um usuario
    And informo nome e email
    Then o usuario é atualizado no sistema

    
Scenario: Atualizando um usuario com email inválido
    And informo nome e um email invalido
    Then visualizo a mensagem de erro "Formato de e-mail inválido"

    
Scenario: Atualizando um usuario com email existente
    And informo nome e um email existente 
    Then visualizo a mensagem de erro "Este e-mail já é utilizado por outro usuário."


Scenario:Atualizando um usuario com mais de 100 caracteres
    And informo um nome com mais de 100 caracteres e um email
    Then visualizo a mensagem de erro "Informe no máximo 100 caracteres para o nome"

 Scenario:Atualizando um email com mais de 100 caracteres
    And informo nome e um email com mais de 60 caracteres
    Then visualizo a mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    
    


    
