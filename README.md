<p align="center">
	<img alt="Logo Inspiring" src="https://github.com/StefaniniInspiring/desafio/blob/main/imgs/inspiring-logo.png?raw=true" width="360">
</p>

# Desafio Inspiring :muscle:

Bem vindo(a) ao Desafio Inspiring! Ficamos felizes em te ver por aqui e queremos te desejar boa sorte!

Leia as instruções com calma e não deixe de evidenciar o seu progresso, mesmo que não consiga concluir totalmente algum item.

**Happy Coding!** :technologist:

### Pré Requisitos :wrench:

- Conta no Github
- Ter uma versão do [Node.js](https://nodejs.org/) instalada, nos itens do desafio utilizamos a versão 14.15.5 (LTS)

### Regras :memo:

- Faça um fork deste repositório, ou clone caso prefira deixá-lo privado
- Siga as instruções de cada item e faça commits do seu progresso no repositório na sua conta do Github

### Entrega :mailbox_with_mail:

Quando concluir o desafio, envie o link do seu repositório aberto para [gttoneti@stefanini.com](mailto:gttoneti@stefanini.com) e [ggregoriis@stefanini.com](mailto:ggregoriis@stefanini.com) ou convide [@gabrieltoneti](https://github.com/gabrieltoneti) e [@giordanna](https://github.com/giordanna) como editores do seu repositório privado.

### Serão avaliados :heavy_check_mark:

- Qualidade de todo código escrito (lógica, limpeza, formatação, dentre outros)
- Padrões de mercado (conceitos, bibliotecas, código, etc)
- Resultado das alterações (a implementação feita deve levar ao resultado esperado)

## Parte 1 - Game Tracker :video_game:

Você entrou para o squad que irá desenvolver um produto para consulta de ofertas de jogos. Os designers já prepararam estes protótipos no Figma da primeira versão do portal:


- **[Protótipo versão mobile](https://www.figma.com/proto/1OChnhd0T3HQdGP1TWHNbX/Game-Tracker-Prot%C3%B3tipo?node-id=123%3A179&scaling=scale-down)**
- **[Protótipo versão desktop](https://www.figma.com/proto/1OChnhd0T3HQdGP1TWHNbX/Game-Tracker-Prot%C3%B3tipo?node-id=124%3A0&scaling=min-zoom)**

Os recursos, cores, fontes podem ser encontrados neste [projeto no Figma](https://www.figma.com/file/1OChnhd0T3HQdGP1TWHNbX/Game-Tracker-Prot%C3%B3tipo?node-id=0%3A1).


Em paralelo, um dev já começou o desenvolvimento em vanilla javascript, que pode ser executado da seguinte forma: 

```bash
cd desafio/game-tracker
npm i
./node_modules/http-server/bin/http-server .
```
O site estará acessível em http://localhost:8080
___

Agora o seu desafio é dar continuidade ao trabalho e tirar o protótipo do papel.
Você pode fazer o desenvolvimento no projeto já existente, ou se preferir pode criar um novo projeto utilizando frameworks, libs de componente, libs utility-first ou o que julgar mais apropriado para o desafio que tem pela frente.

**OBS:** Caso crie o seu projeto, não esqueça de deixar as instruções de como rodar localmente.

### Fase 1 - Layout e Navegação
1. Utilize os dados do objeto `ofertas` do arquivo `desafio/game-tracker/script.js` para criar os conteúdos presentes na tela.

	- O objeto não possui a porcentagem de desconto em cada oferta. Faça o cálculo necessário para obter a porcentagem nas ofertas, que deve aparecer no layout proposto.
2. O projeto rodando deve ser o mais fiél possível aos protótipos
3. O site deve ser responsivo e mudar a sua visualização de mobile para desktop quando a largura da tela for superior a 768px

### Fase 2 - Adicionar Funcionalidades 
1. Implemente o filtro de jogo, que deverá exibir somente os jogos que correspodem com o texto digitado conforme o exemplo abaixo:
![Exemplo](imgs/filtro.gif)
2. Implemente a ordenação de jogos, que deverá alterar a ordem em que são exibidos, conforme exemplo abaixo:
![Exemplo](imgs/ordenacao.gif)
	Os filtros a serem implementados são:
	- Porcentagem de desconto (do maior para o menor, deve ser aplicada por padrão)
	- Maior preço (desconto)
	- Menor preço (desconto)
	- Título (ordem alfabética)

### Fase 3 - Uso de API

Até o momento as ofertas usadas eram mockadas. Vamos deixar as coisas mais dinâmicas por aqui.

1. Implemente o uso de uma API para consultar as ofertas de jogos. No momento em que este desafio foi proposto achamos melhor o uso da [API CheapShark](https://apidocs.cheapshark.com/). Como proposta inicial sugerimos realizar uma requisição GET do seguinte endpoint:
    ```
    https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1
    ```
    Sendo os seguintes parâmetros de URL:
    - `pageNumber`: número da página atual
    - `pageSize`: quantidade de ofertas trazidas por página
    - `storeID`: ID da loja na qual está sendo consultada as ofertas (Steam, Epic Games, GOG, etc)
    - `onSale`: consultar apenas jogos em promoção
    - `AAA`: consultar apenas jogos cuja venda no preço normal é maior que 29 dólares

    **OBS:** É importante manter o `storeID=1` na requisição, pelo motivo que será descrito abaixo.
2. Altere as imagens do banner, utilizando a seguinte URL de base:
    ```js
    'https://cdn.akamai.steamstatic.com/steam/apps/' + steamAppID + '/header.jpg'
    ```
    Sendo `steamAppID` o ID do jogo no Steam, que é retornado no objeto JSON da consulta acima.

    **OBS:** Existem imagens cuja URL não irá funcionar por se tratar de um bundle. Seria bom tratar em caso de erro.

## Parte 2 - Game Tracker Admin :shield:

O projeto também possui um site admin desenvolvido em Angular 11 e Material que servirá para cadastrar novas ofertas de jogos.

Este projeto foi iniciado por um membro do time, porém ele acabou saindo de férias e ficou para você finalizar e corrigir o que ele deixou.

Para executar o projeto, siga estes passos:

```bash
cd desafio/adm
npm i
ng serve
```
O site estará acessível em http://localhost:4200
___

O projeto consiste em 2 páginas, uma com a lista de jogos cadastrados e outra para realizar o cadastro/atualização do jogo.

### Fase 1 - Correção de problemas

1. Identifique e corrija os diversos problemas que o projeto apresenta.

### Fase 2 - Tela "Nossas ofertas"

A tela `desafio/adm/src/app/pages/nossas-ofertas` lista todas as ofertas de jogos.

1. Faça com que nela seja possível acessar as informações de uma oferta, abrindo a tela `desafio/adm/src/app/pages/cadastro-ofertas` no modo edição de oferta, com as informações preenchidas em seus devidos campos.
2. Inclua um botão "Criar Oferta" na tela `desafio/adm/src/app/pages/nossas-ofertas`, onde achar melhor, para abrir a tela `desafio/adm/src/app/pages/cadastro-ofertas` no modo criação de oferta.

### Fase 3 - Tela "Cadastro de Ofertas"

A tela `desafio/adm/src/app/pages/cadastro-ofertas` permite a criação/edição de uma oferta.

1. Adicione as seguintes validações nos campos dos formulários:
	- Id
		- Somente números
		- Único
		- Obrigatório
		
	- Título do Jogo
		- Obrigatório
		
	- Preço
		- Obrigatório
		- Deve ser maior que 0 (zero)
		
	- Preço com Desconto
		- Obrigatório
		- Deve ser maior que 0 (zero)
		- Deve ser menor que o preço
		
	- Loja
		- Obrigatório

2. Permita a criação/edição de uma oferta **apenas** se todos os campos do formulário estiverem válidos.

	**OBS:** É importante dar um retorno ao usuário, informando que deu certo ou não sua operação.

3. Ao finalizar a operação, redirecione o usuário à tela de Nossas Ofertas, que deve possuir as informações mais atualizadas.
