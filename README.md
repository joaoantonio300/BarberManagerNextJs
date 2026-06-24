# BarberManager - Sistema de Gestão de Barbearia

O **BarberManager** é um sistema completo para gestão de barbearias, permitindo o controle de agendamentos (apontamentos), cadastro de clientes com sistema de fidelidade, gerenciamento de serviços e administração de profissionais.

---

## 🎯 Objetivo do Projeto

Facilitar o dia a dia de barbearias modernas através de um painel de controle interativo. O sistema conta com uma agenda interativa no estilo Kanban, onde os agendamentos podem ser arrastados entre colunas de diferentes profissionais para atualizar a escala de trabalho em tempo real.

---

## 🛠️ Tecnologias Utilizadas

* **Framework Principal:** [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
* **ORM (Mapeamento de Banco de Dados):** [Prisma ORM 7.1.0](https://www.prisma.io/)
* **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) executado via Docker
* **Validação de Dados:** [Zod](https://zod.dev/)
* **Estilização e Interface:**
  * [Tailwind CSS v4](https://tailwindcss.com/)
  * [PrimeReact](https://primereact.org/) & [PrimeFlex](https://primefaces.org/primeflex/)
  * [Lucide React Icons](https://lucide.dev/)
* **Drag and Drop (Arrastar e Soltar):** [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)

---

## 📐 Estratégias de Construção e Padrões de Arquitetura

O projeto foi construído seguindo boas práticas de desenvolvimento de software e separação de conceitos:

1. **Schemas de Validação (Zod):** Camada responsável por garantir a integridade dos dados recebidos nas requisições HTTP antes de qualquer processamento.
2. **Padrão Repositório (Repository Pattern):** Toda a comunicação com o banco de dados é centralizada em repositórios (ex: `ClientsRepository`, `AppointmentsRepository`), desacoplando a lógica de banco dos controladores de rotas.
3. **Camada de Serviço (Service Layer):** Centraliza as regras de negócio do sistema (como validação de número de telefone único para novos clientes).
4. **Next.js API Routes como Controllers:** Os endpoints de API (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) atuam apenas como receptores das requisições, delegando o trabalho pesado para os serviços e repositórios.
5. **Drivers Adaptadores Dinâmicos:** Utilização do `@prisma/adapter-pg` integrado ao `prisma.config.ts` para otimização de conexões e suporte nativo ao driver do PostgreSQL.

---

## 🚀 Como Iniciar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

### 1. Instalar as dependências
```bash
npm install
```

### 2. Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto (copiando os dados abaixo ou ajustando caso utilize outra senha do PostgreSQL):
```env
DATABASE_URL="postgresql://postgres:123456@localhost:5432/barber?schema=public"
JWT_SECRET="sua_chave_secreta_aqui"
NODE_ENV="development"
```

### 3. Iniciar o Banco de Dados (PostgreSQL)
O projeto conta com um arquivo `docker-compose.yml` para facilitar a criação do banco de dados. Caso utilize WSL (Ubuntu) ou Docker local:
```bash
docker compose up -d
```

### 4. Gerar o Cliente do Prisma
Gere os arquivos do Prisma Client localizados no projeto:
```bash
npx prisma generate
```

### 5. Executar as Migrações do Banco de Dados
Crie as tabelas no PostgreSQL com base no schema definido:
```bash
npx prisma migrate dev
```

### 6. Popular o Banco de Dados (Seed)
Popule o banco de dados com dados iniciais (usuários, clientes, serviços e agendamentos padrão):
```bash
npx prisma db seed
```

### 7. Iniciar o Servidor de Desenvolvimento
Inicie a aplicação Next.js:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
