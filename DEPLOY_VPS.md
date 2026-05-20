# Deploy em VPS

Este projeto esta preparado para rodar com:

- frontend Vite servido pelo Nginx a partir de `dist`;
- backend Node.js + Express na porta `4002`, gerenciado por PM2;
- PostgreSQL local na VPS;
- uploads locais em `server/storage/catalog-products`;
- Nginx fazendo proxy de `/api` e `/uploads` para o backend.

## 1. Dependencias do servidor

```bash
sudo apt update
sudo apt install -y nodejs npm postgresql postgresql-contrib nginx
sudo npm install -g pm2
```

Use uma versao LTS recente do Node.js, preferencialmente Node 20 ou superior.

## 2. Banco PostgreSQL

```bash
sudo -u postgres psql
```

```sql
create database consultoria_geraldo_db;
create user consultoria_geraldo_user with encrypted password 'troque_esta_senha';
grant all privileges on database consultoria_geraldo_db to consultoria_geraldo_user;
\c consultoria_geraldo_db
grant all on schema public to consultoria_geraldo_user;
\q
```

## 3. Backend

```bash
cd /var/www/consultoria-geraldo/server
npm install
cp .env.example .env
```

Edite `server/.env`:

```bash
PORT=4002
DATABASE_URL=postgresql://consultoria_geraldo_user:troque_esta_senha@localhost:5432/consultoria_geraldo_db
JWT_SECRET=gere_um_segredo_longo_e_forte
CORS_ORIGIN=https://seudominio.com.br
PUBLIC_BASE_URL=https://seudominio.com.br
ADMIN_EMAIL=admin@seudominio.com.br
ADMIN_PASSWORD=troque_esta_senha_admin
```

Depois rode:

```bash
npm run migrate
npm run seed:admin
npm run seed:products
npm start
```

Para PM2:

```bash
pm2 start src/server.js --name consultoria-geraldo-api
pm2 save
pm2 startup
```

## 4. Frontend

Se frontend e backend estao no mesmo dominio, mantenha `VITE_API_BASE_URL` vazio.

```bash
cd /var/www/consultoria-geraldo
npm install
npm run build
```

Se o backend estiver em outro dominio, crie `.env` na raiz antes do build:

```bash
VITE_API_BASE_URL=https://api.seudominio.com.br
```

## 5. Nginx

Exemplo para mesmo dominio:

```nginx
server {
    listen 80;
    server_name seudominio.com.br www.seudominio.com.br;

    root /var/www/consultoria-geraldo/dist;
    index index.html;

    client_max_body_size 10M;

    location = /admin {
        try_files /admin.html =404;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:4002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /uploads/ {
        proxy_pass http://127.0.0.1:4002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Depois:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 6. Preservar uploads

Nao apague `server/storage/catalog-products` durante deploy. Essa pasta contem imagens enviadas pelo admin.

Em deploys por Git, a pasta tem `.gitkeep`, mas os arquivos enviados sao ignorados pelo Git.

## 7. Checklist rapido

```bash
curl https://seudominio.com.br/api/health
curl https://seudominio.com.br/api/products
pm2 status
pm2 logs consultoria-geraldo-api
```
