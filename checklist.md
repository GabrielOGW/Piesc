# Checklist - Projeto Piesc

## Requisitos do Sistema

### Frontend

#### Cadastro de Produtos

- [ ] Página de cadastro de produtos
  - [ ] Formulário para inserção de informações do produto
    - [ ] Nome do produto
    - [ ] Descrição do produto
    - [ ] Quantidade em estoque
    - [ ] Categoria do produto
    - [ ] Lote do produto

#### Edição de Produtos

- [ ] Página de edição de produtos
  - [ ] Capacidade de editar informações do produto
    - [ ] Atualizar nome do produto
    - [ ] Atualizar descrição do produto
    - [ ] Atualizar quantidade em estoque
    - [ ] Atualizar categoria do produto
    - [ ] Atualizar Lote do produto

#### Visualização de Produtos

- [ ] Página de visualização de produtos
  - [ ] Lista de produtos disponíveis
    - [ ] Exibição do nome, descrição, quantidade, categoria e lote do produto
  - [ ] Capacidade de visualizar detalhes completos de um produto específico

### Backend

- [ ] Configuração inicial do ambiente de backend
  - [ ] Configuração do servidor Node.js

#### API de Produtos

- [ ] Implementação de API RESTful para produtos
  - [ ] Rota para cadastro de produtos
  - [ ] Rota para edição de produtos
  - [ ] Rota para listagem de produtos
  - [ ] Rota para detalhes de um produto específico

#### Banco de Dados

- [ ] Configuração do banco de dados MySQL(typeORM)
  - [ ] Tabelas para armazenamento de produtos:
    - [ ] id do produto
    - [ ] nome do produto
    - [ ] descrição do produto
    - [ ] quantidade em estoque
    - [ ] categoria do produto
    - [ ] lote do produto
  - [ ] Conexão entre o backend e o banco de dados
