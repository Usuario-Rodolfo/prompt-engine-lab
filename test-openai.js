// Carrega as variáveis do .env
import 'dotenv/config';
import OpenAI from 'openai';

// Cria o cliente com a chave
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const runTest = async () => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Olá, tudo certo?" }]
    });

    console.log("✅ Conexão bem-sucedida!");
    console.log("Resposta do modelo:", response.choices[0].message.content);
  } catch (error) {
    console.error("Erro ao conectar:", error);
  }
};

runTest();
