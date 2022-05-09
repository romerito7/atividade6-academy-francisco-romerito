Feature: Listar Usuarios
    Como um usuário Crud Front End
    Desejo listar os usuários 
    Para ter acesso as sua informações

Scenario: Deve ser possivel visualizar todos os usuários
    Given acessei a pagina inicial
    Then visualizo os usuários cadastrados   

Scenario: Quando não houver usuarios cadastrados
    Given acessei a pagina inicial
    Then visualizo link para cadastrar usuarios

