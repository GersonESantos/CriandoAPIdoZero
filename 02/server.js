import express from 'express';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', async (req, res) => {
  try {
    const { name, email, senha, tel } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        senha,
        tel,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});