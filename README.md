# Prompt Engineering Lab

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)
![License](https://img.shields.io/github/license/Usuario-Rodolfo/prompt-engine-lab?style=flat-square)

Este projeto, chamado **"Prompt Engineering Lab"**, é um laboratório profissional voltado para integração com a **API OpenAI**.  
O objetivo principal é oferecer um ambiente seguro e organizado para testes, automações, engenharia de prompts e desenvolvimento DevOps, permitindo experiências práticas com modelos GPT de forma rápida e eficiente.

## Funcionalidades
- Teste e validação da API OpenAI utilizando Node.js.
- Integração de variáveis de ambiente através de arquivos `.env` ou GitHub Codespaces Secrets.
- Estrutura modular pronta para automações e desenvolvimento avançado de prompts.
- Setup de ambiente rápido para GitHub Codespaces ou execução local.
- Scripts de teste pré-configurados para verificar a conectividade com a API.

## Estrutura do projeto
- `.devcontainer/`: Configuração para GitHub Codespaces (`devcontainer.json`, extensões, comandos pós-criação).  
- `test-openai.js`: Script de teste da API OpenAI.  
- `package.json` e `package-lock.json`: Configuração e dependências Node.js.  
- `node_modules/`: Diretório gerado com as dependências instaladas.  
- `.env` (não commitado): Armazena a chave `OPENAI_API_KEY` de forma segura.  

## Segurança
- Todas as chaves e tokens são armazenados em variáveis de ambiente.  
- O arquivo `.env` não deve ser commitado no repositório.  
- GitHub Codespaces carrega automaticamente as secrets para o ambiente de desenvolvimento.  
- Nenhuma credencial sensível é exposta no código.  

## Instalação
Para instalar e rodar o projeto, siga os passos abaixo:

```bash
git clone https://github.com/Usuario-Rodolfo/prompt-engine-lab.git
cd prompt-engine-lab
npm install
