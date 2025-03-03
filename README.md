# Contêiner Docker MongoDB-V4.4

Este repositório tem o objetivo de fornecer um ambiente isolado para desenvolvimento e testes com o MongoDB, facilitando a configuração e a persistência de dados através do Docker e Docker Compose.

## Estrutura de Diretórios

A estrutura de diretórios do projeto é a seguinte:
```
    Docker_MongoDB-V4.4/
    docker_mongo-latest/
    ├── dados_mongo/
    │   └── .gitignore
    ├── .gitignore
    ├── docker-compose.yml
    ├── init-mongo.js
    └── README.md
```
* **dados_mongo/**: Diretório destinado ao armazenamento dos dados do MongoDB. Os dados persistentes do banco de dados serão mantidos aqui.

* **dados_mongo/.gitignore**: Arquivo .gitignore dentro do diretório dados_mongo/ que garante que apenas o diretório em si seja mantido no repositório e não seus conteúdos (dados do MongoDB).

* **.gitignore**: Arquivo que especifica quais arquivos ou diretórios devem ser ignorados pelo Git.

* **docker-compose.yml**: Arquivo de configuração do Docker Compose que define os serviços e suas respectivas configurações.

* **init-mongo.js**: Este script é executado quando o MongoDB é iniciado, criando o banco de dados Meu_Docker_Mongo e inserindo um documento inicial na coleção teste

* **README.md**: Este documento! Fornecendo detalhes sobre o projeto e instruções de uso.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados em sua máquina:

* **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres. Leia a [Documentação Oficial do Docker](https://docs.docker.com/manuals/)

* **Git**: Sistema de controle de versão distribuído. Leia a [Documentação Oficial do Git](https://git-scm.com/docs/git/pt_BR)

Caso encontre dificuldades durante a instalação ou configuração, consulte as respectivas documentações para obter suporte detalhado.

## Clonando o Repositório

Para obter uma cópia local do repositório, abra o terminal (no Linux) ou o prompt de comando (no Windows) e execute:
```bash
git clone https://github.com/carlosfreires/Docker_MongoDB-V4.4.git
```

## Executando o Projeto

Para iniciar os serviços definidos no docker-compose.yml, navegue até o diretório clonado e execute o comando abaixo no terminal ou prompt de comando:
```bash
docker-compose up -d
```
Este comando fará o download da imagem oficial do MongoDB versão 4.4. Criará e iniciará o contêiner configurado.

## Acessando o MongoDB
Após iniciar o contêiner, o **MongoDB** estará acessível na *porta 27017 do host local*. Você pode conectar-se a ele utilizando clientes como o *MongoDB Compass*.

### Utilizando o MongoDB Compass
O MongoDB Compass é uma interface gráfica que facilita a interação com o MongoDB. Para utilizá-lo:

* **Baixe e instale o MongoDB Compass**: [Download MongoDB Compass](https://www.mongodb.com/try/download/compass)
* Leia a [Documentação Oficial do MongoDB Compass](https://www.mongodb.com/pt-br/docs/compass/current/)

* **Conecte-se ao MongoDB**: Use a string de conexão *mongodb://root:1234@localhost:27017/Meu_Docker_Mongo?authSource=admin*.

## Parando e Removendo o Contêiner
Para parar o contêiner, execute:

```bash
docker-compose down
```
Este comando encerrará e removerá os contêineres em execução, mas os dados persistidos em dados_mongo/ serão mantidos.

## Informação de Compatibilidade com Processadores Sem AVX

* Para garantir a compatibilidade com uma variedade maior de processadores, incluindo aqueles que não possuem suporte a AVX (Advanced Vector Extensions), esta configuração utiliza a versão 4.4 do MongoDB.

* As versões mais recentes do MongoDB (5.0+) exigem suporte a AVX, o que pode limitar a execução em hardware mais antigo. Ao escolher a versão 4.4, garantimos que você possa executar o banco de dados em uma gama mais ampla de sistemas, sem a necessidade de processadores com AVX.

* Se você precisar de recursos das versões mais recentes do MongoDB e possuir um processador com suporte a AVX, considere atualizar a versão da imagem no `docker-compose.yml`.