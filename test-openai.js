import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function runTest() {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "Escreva uma frase curta de teste"
  });

  console.log(response.output_text);
}

runTest();
