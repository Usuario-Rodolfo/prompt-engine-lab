import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const run = async () => {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "Diga 'Olá Mundo' de forma divertida."
  });
  console.log(response.output_text);
};

run();
