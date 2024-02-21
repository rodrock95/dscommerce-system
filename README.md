# Sistema DSCommerce

O projeto de estudos DSCommerce, abreviação de "Digital Store" Commerce é um sistema Full Stack desenvolvido durante o curso ReactJS Professional da escola DevSuperior utilizando as linguagens Java e TypeScript em conjunto com os frameworks Spring Boot e ReactJS. 

Segue abaixo o design Figma do projeto:

https://www.figma.com/file/ZrGNVNG0kZL6txDv4G8P6s/DSCommerce

Para aacessar o documento de requisitos, acesse:

[Documento de requisitos DSCommerce.pdf](https://github.com/rodrock95/dscommerce-frontend/files/14361226/Documento.de.requisitos.DSCommerce.pdf)

## Premissas

Deseja-se fazer um sistema para ser utilizado em cursos da Devsuperior como forma de aprendizado. Para isto, a concepção do sistema partiu das seguintes
premissas:

- Deve ser um sistema que possua um modelo de domínio relativamente simples,
porém abrangente, ou seja, que explore vários tipos de relacionamentos entre as
entidades de negócio (muitos-para-um, muitos-para-muitos, etc.).

- O sistema deve possibilitar a aplicação de vários conhecimentos importantes das
disciplinas de fundamentos.

- O sistema deve conter as principais funcionalidades que se espera de um
profissional iniciante deve saber construir, tais como telas de cadastro e fluxos de
caso de uso.

## Visão geral do sistema

O sistema deve manter um cadastro de usuário, produtos e suas categorias. Cada usuário possui nome, email, telefone, data de nascimento e uma senha de acesso. Os dados dos produtos são: nome, descrição, preço e imagem. O sistema deve apresentar um catálogo de produtos, os quais podem ser filtrados pelo nome do produto. A partir desse catálogo, o usuário pode selecionar um produto para ver seus detalhes e para decidir se o adiciona a um carrinho de compras. O usuário pode incluir e remover itens do carrinho de compra, bem como alterar as quantidades de cada item. Uma vez que o usuário decida encerrar o pedido, o pedido deve então ser salvo no sistema com o status de "aguardando pagamento". 

Os dados de um pedido são: instante em que ele foi salvo, status, e uma lista de itens, onde cada item se refere a um produto e sua quantidade no pedido. O status de um pedido pode ser: aguardando pagamento, pago, enviado, entregue e cancelado. Quando o usuário paga por um pedido, o instante do pagamento deve ser registrado. Os usuários do sistema podem ser clientes ou administradores, sendo que todo usuário cadastrado por padrão é cliente. Usuários não identificados podem se cadastrar no sistema, navegar no catálogo de produtos e no carrinho de compras. Clientes podem atualizar seu cadastro no sistema, registrar pedidos e visualizar seus próprios pedidos. Usuários administradores tem acesso à área administrativa onde pode acessar os cadastros de usuários, produtos e categorias.

## Modelo conceitual (Diagrama de Classes)

Este é o modelo conceitual do sistema DSCommerce. Considerações:

- Cada item de pedido (OrderItem) corresponde a um produto no pedido, com uma quantidade. Sendo que o preço também é armazenado no item de pedido por questões de histórico (se o preço do produto mudar no futuro, o preço do item de pedido continua registrado com o preço real que foi vendido na época).
- 
- Um usuário pode ter um ou mais "roles", que são os perfis de acesso deste usuário no sistema (client, admin).

![modeloDSCommerce](https://github.com/rodrock95/dscommerce-frontend/assets/79290866/8e338f18-c4af-4b79-8747-b4fd473e721a)

# Tecnologias utilizadas
## Backend
- Java
- Spring Boot
- JPA/Hibernate
- Maven

## Frontend
- ReactJS
- Componentes
- Rotas
- Hooks
- Requisições
- Local storage
- Eventos
- Estado global
- Controle de acesso
- Formulários

Implantação local CI/CD com Netlify:

https://dscommerce-rodrigo.netlify.app


