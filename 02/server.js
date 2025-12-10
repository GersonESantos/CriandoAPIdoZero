import express from 'express';
import { PrismaClient } from '@prisma/client'; // Usando a importação direta
import 'dotenv/config';

const app = express();

// A MUDANÇA ESTÁ AQUI:
// Passamos a URL do banco de dados diretamente para o construtor
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

app.use(express.json());

const port = 3000;

// ... resto do seu código do servidor ...

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});