Feature: Login no site CDL

    Scenario Outline: Scenario Outline name: Conseguir logar no site 
        Given Acesso o site da CDL
        When acesso a pagina de login
        And preencho o campo de código do associado <username> e senha <senha>
        And clico no botão entrar
        Then devo conseguir logar no site

        Examples:
            | username | senha | 
            | 01085737  | 5ko6wm2g  | 