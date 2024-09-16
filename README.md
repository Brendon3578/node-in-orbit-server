<h1 align="center">
  <img src="./.github/assets/in-orbit.svg" width="28" alt="In Orbit" />
  in.orbit - Server
</h1>

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 💻 Projeto

<img src="./.github/assets/in-orbit-logo.svg" alt="In Orbit Logo" />

Essa aplicação é um Backend voltado para o gerenciamento de hábitos e metas ao longo da semana. É possível visualizar as metas e gerenciar a frequência da qual a meta será realizada ao longo da semana.

Com ele é possível:

- Criar e gerenciar as suas metas/hábitos
- Visualizar as metas realizadas ao longo da semana ou de um dia
- Gerenciar a frequência da realização de metas

## ✨ Tecnologias

- [Fastify](https://www.fastify.io/) - Biblioteca para a criação de um servidor HTTP RESTful
- [Zod](https://zod.dev/) - Utilizado para validação de dados trafegados das rotas
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados utilizado para a implementação um banco de dados robusto e escalável
- [Drizzle ORM](https://orm.drizzle.team/) - Object Relational Mapping (ORM) utilizado para facilitar a construção de **Querys** feitas para o PostgreSQL
- [Dayjs](https://day.js.org/) - Biblioteca para manipulação de estrutura de datas.

## 🔥 Iniciar a aplicação

Antes de tudo é necessário ter o banco de dados PostgreSQL instalado, localmente ou em um container do Docker, e saber sua string de conexão e defini-la em um arquivo `.env` (pegue como exemplo o arquivo `.env.example`).

```bash
# Baixar as dependências
npm install

# Popular o banco de dados através do Drizzle ORM (src/db/seed.ts)
npm run seed

# Iniciar o servidor http no ambiente de desenvolvimento na porta 3333 (http://localhost:3333)
npm run dev
```

---

<h3 align="center">
    Feito com ☕ por <a href="https://github.com/Brendon3578"> Brendon Gomes</a>
</h3>
