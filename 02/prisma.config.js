// Importa e configura o dotenv para carregar variáveis de ambiente
require("dotenv/config");

// Importa as funções necessárias do pacote de configuração do Prisma
const { defineConfig, env } = require("prisma/config");

// Exporta a configuração
module.exports = defineConfig({
  // Caminho para o seu schema do Prisma
  schema: "prisma/schema.prisma",
  
  // Define a fonte de dados
  datasource: {
    // Pega a URL do banco de dados da variável de ambiente DATABASE_URL
    url: env("DATABASE_URL"),
  },
});