# Geraldo Lira | Catalogo tecnico para saneamento e infraestrutura

Site institucional e catalogo administravel para consultoria tecnica em saneamento, infraestrutura e fornecimento de materiais. O projeto combina uma experiencia publica leve, responsiva e orientada a cotacao com um painel privado para manutencao do catalogo de produtos.

> Projeto desenvolvido com foco em apresentacao profissional, autonomia operacional e cuidado com dados sensiveis. Este repositorio nao deve conter credenciais, IPs de servidor, arquivos `.env` reais ou dados privados de infraestrutura.

## Visao geral

O site foi criado para transformar um catalogo tecnico extenso em uma experiencia comercial clara: o visitante consegue navegar por linhas de produto, consultar materiais por categoria/aplicacao, acessar catalogos em PDF e iniciar uma solicitacao de cotacao de forma direta.

Ao mesmo tempo, o projeto inclui uma area administrativa protegida para atualizar produtos, imagens, status de publicacao e ordem de exibicao sem depender de edicao manual no codigo.

## Destaques para recrutadores

- **Produto real, nao apenas interface estatica:** o catalogo publico consome dados publicados pela API quando disponiveis e mantem uma base local como fallback.
- **Painel administrativo completo:** autenticacao, listagem, filtros, criacao, edicao, exclusao, upload/remocao de imagem, publicacao/ocultacao e exportacao de dados.
- **Arquitetura simples e pragmatica:** frontend Vite com HTML/CSS/JS modularizado no proprio projeto e backend Express separado em rotas, controllers, middlewares, migrations e seeds.
- **Persistencia relacional:** PostgreSQL com migrations versionadas, indices para consulta publica e trigger de `updated_at`.
- **Cuidado com seguranca:** variaveis sensiveis ficam fora do Git, senhas administrativas sao armazenadas com hash, rotas privadas usam JWT e upload de imagens possui validacao de tipo e limite de tamanho.
- **Experiencia responsiva:** layout adaptado para mobile, navegacao por secoes, filtros de catalogo e chamada comercial clara.

## Funcionalidades

### Site publico

- Home institucional para Geraldo Lira.
- Catalogo de produtos por categoria e aplicacao.
- Busca textual no catalogo.
- Secao de trabalhos/linhas tecnicas.
- Area de catalogos PDF.
- Paginas/secoes de sobre e contato.
- Formulario que monta uma mensagem de cotacao para atendimento externo.
- Fallback de catalogo local quando a API nao esta disponivel.

### Painel administrativo

- Login administrativo com email e senha.
- Dashboard com resumo do catalogo.
- Busca, filtros e ordenacao de produtos.
- Cadastro e edicao de nome, descricao, categoria, filtro, ordem e destaque.
- Controle de produto publicado/oculto.
- Upload de imagem com conversao/normalizacao pelo backend.
- Remocao de imagem sem excluir o produto.
- Exclusao definitiva de produto.
- Exportacao de dados em JSON e CSV.

### API

- `GET /api/health` para verificacao de saude.
- `GET /api/products` para listar produtos publicados.
- `GET /api/products/:slug` para detalhe publico.
- `POST /api/auth/login` para autenticacao administrativa.
- Rotas `/api/admin/*` protegidas por token JWT.
- Rotas de upload para imagens do catalogo.

## Stack

### Frontend

- Vite
- HTML semantico
- CSS responsivo
- JavaScript moderno com ES modules
- Iconify local para icones

### Backend

- Node.js
- Express
- PostgreSQL
- `pg`
- `jsonwebtoken`
- `bcryptjs`
- `multer`
- `sharp`

## Estrutura do projeto

```text
.
├── index.html                 # Site publico
├── admin.html                 # Painel administrativo
├── styles.css                 # Estilos globais e responsivos
├── assets/                    # Assets de apoio
├── public/                    # Catalogos e imagens publicas
├── produtos/                  # Imagens organizadas por linha tecnica
├── src/data/                  # Dados locais/fallback do catalogo
├── scripts/                   # Utilitarios de geracao de seed
├── server/
│   ├── src/
│   │   ├── controllers/       # Regras de auth e produtos
│   │   ├── middleware/        # Auth JWT e upload
│   │   ├── migrations/        # SQL versionado
│   │   ├── routes/            # Rotas publicas e admin
│   │   ├── seeds/             # Seeds de admin e produtos
│   │   ├── app.js             # Configuracao Express
│   │   └── server.js          # Bootstrap do backend
│   └── storage/               # Uploads locais ignorados pelo Git
└── seed-products.json         # Base inicial de produtos
```

## Como rodar localmente

### 1. Instalar dependencias do frontend

```bash
npm install
```

### 2. Instalar dependencias do backend

```bash
cd server
npm install
```

### 3. Configurar variaveis de ambiente

Crie os arquivos locais a partir dos exemplos:

```bash
cp .env.example .env
cp server/.env.example server/.env
```

Exemplo de variaveis do backend, sempre com valores locais ou placeholders:

```env
PORT=4002
DATABASE_URL=postgresql://usuario:senha@localhost:5432/consultoria_geraldo_db
JWT_SECRET=troque_por_um_segredo_forte
CORS_ORIGIN=http://localhost:5173
PUBLIC_BASE_URL=http://localhost:5173
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=troque_esta_senha
```

Nunca versionar `.env`, credenciais reais, IPs de servidor, chaves privadas ou dados internos de deploy.

### 4. Preparar banco de dados

Com PostgreSQL disponivel e `DATABASE_URL` configurado:

```bash
cd server
npm run migrate
npm run seed:admin
npm run seed:products
```

### 5. Iniciar backend

```bash
cd server
npm run dev
```

### 6. Iniciar frontend

Em outro terminal:

```bash
npm run dev
```

O frontend roda via Vite. A URL local sera exibida no terminal.

## Scripts

### Raiz do projeto

```bash
npm run dev      # inicia o frontend Vite
npm run build    # gera build de producao
npm run preview  # visualiza o build localmente
```

### Backend

```bash
npm run dev            # inicia API em modo watch
npm start              # inicia API em modo producao
npm run migrate        # executa migrations SQL
npm run seed:admin     # cria/atualiza usuario admin
npm run seed:products  # popula catalogo inicial
```

## Boas praticas de seguranca adotadas

- `.env` e `server/.env` ficam ignorados pelo Git.
- Uploads gerados em runtime ficam fora do versionamento.
- Senhas administrativas sao salvas como hash com `bcryptjs`.
- Autenticacao administrativa usa JWT.
- Uploads aceitam apenas imagens nos formatos permitidos.
- Arquivos enviados possuem limite de tamanho.
- O README usa apenas placeholders e nao documenta IP, dominio privado, paths de VPS ou credenciais reais.

## Decisoes tecnicas

- **Frontend leve:** Vite entrega uma aplicacao rapida, sem complexidade desnecessaria para um site institucional de catalogo.
- **Backend separado:** a API Express isola regras de negocio, autenticacao, upload e persistencia.
- **Catalogo resiliente:** o site publico consegue exibir dados locais quando a API nao responde, preservando a experiencia do visitante.
- **Admin funcional:** a gestao do catalogo fica em uma interface propria, evitando alteracoes manuais no HTML para tarefas recorrentes.
- **Banco relacional:** PostgreSQL foi escolhido pela previsibilidade, integridade e facilidade para evoluir filtros, categorias e ordenacao.

## Checklist antes de publicar alteracoes

```bash
npm run build
```

Tambem e recomendado validar:

- se nenhum `.env` real aparece no `git status`;
- se uploads locais nao foram adicionados por engano;
- se o README nao contem IP, senha, token, chave privada ou dados de infraestrutura;
- se o painel admin continua acessando a API configurada por `VITE_API_BASE_URL`.

## Licenca e uso

Projeto privado/comercial. O codigo e os assets deste repositorio devem ser usados apenas com autorizacao da proprietaria do projeto.
