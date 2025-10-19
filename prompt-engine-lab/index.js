import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  try {
    const response = await client.responses.create({
      model: "gpt-5",
      reasoning: { effort: "low" },
      instructions: `
        Você é um assistente técnico e criativo.
        Gere uma explicação curta e envolvente sobre o que é engenharia de prompts
        e como ela pode melhorar resultados de modelos de linguagem.
      `
    });

    console.log("🧠 Saída do modelo:\n");
    console.log(response.output_text);
  } catch (error) {
    console.error("Erro ao gerar resposta:", error);
  }
}

main();
