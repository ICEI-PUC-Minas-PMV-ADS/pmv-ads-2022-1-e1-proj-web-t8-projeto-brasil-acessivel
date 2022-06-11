# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
* Site publicado na Internet
* Navegador da Internet - Chrome, Firefox ou Edge
* Conectividade de Internet para acesso às plataformas (APISs)
* Utilizar o leitor de telas NVDA atualizado.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste | CT-01 - Visualizar bares e restaurantes no menu categorias na página principal |
| :------------: | ------------------------------------------------------------------------------- |
| Requisitos Associados | RF-002 - O site deve apresentar categorias para facilitar a busca dos usuários<br> RF-003 - O site deve apresentar as informações do estabelecimento |
| Objetivos do teste | Validar se os atalhos do menu de categoria estão exibindo informações respectivas dos bares e restaurantes |
| Passos | 1) Acessar o navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Acessar o menu categorias<br> 5) Pressionar o botão bares e restaurantes |
| Critérios de êxito | Após pressionar o botão bares e restaurantes, o sistema deve exibir informações de no mínimo dois estabelecimentos relacionados a opção escolhida.|

| Caso de Teste | CT-02 - Autenticar um usuário |
| :--------: | ------------------------------ |
| Requisitos Associados | RF-008 - O site deve possuir uma área de login para que o usuário possa fazer determinadas ações
| Objetivos do teste | Validar se a autenticação dos usuários está acontecendo bem como se for inserido informação incorreta à autenticação falhe |
| Passos | 1) Acessar o navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Acessar o botão login<br> 5) Inserir usuário e senha válidos e pressione o botão "fazer login"<br> 6) Inserir usuário e senha inválido e pressione o botão "fazer login" |
| Critérios de êxito | - Ao inserir um usuário e senha válido e pressionar o botão "fazer login", deve exibir um alerta de usuário logado e na página as informações do usuário logado<br> - Ao inserir um usuário e senha inválidos e pressionar o botão "fazer login", deve exibir um alerta de erro|

| Caso de Teste | CT-03 - Validar cadastro de usuários e verificar usuários já cadastrados|
| :-----------: | ----------------------------------------------------------------------- |
| Requisitos Associados | RF-010 - O site deve possuir uma área para cadastrar novos usuários, prestadores e empresas |
| Objetivos do teste | Visualizar o formulário de usuários e exibir uma lista de usuários já cadastrados |
| Passos | 1) Acessar o navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Acessar o botão "cadastrar"<br> 5) Pressionar o botão "usuário comum"<br> 6) Pressionar o botão "ver usuários cadastrados"|
|Critérios de êxito | Após pressionar o botão "usuário comum", deve exibir um formulário de cadastro e ao fim do mesmo um botão "ver usuários cadastrados", quando o mesmo for acionado deverá exibir uma lista com usuários já cadastrados |
