1. Download node.js e instalar no computador.

2. Instalar o TypeScript globalmente na máquina.
   2.1 npm i -g typescript

3. Inicializar o node na aplicação
   3.1 npm init --y (vai gerar o package.json)

4. Instalar as dependências de desenvolvimento.
   4.1 npm i -D typescript
   4.2 npm i -D ts-node-dev

5. Inicializar o typescript no projeto
   5.1 npx tsc --init

6. Para transpilar o arquivo typescript para javascript
   6.1 npx tsc app.ts (vai gerar um arquivo javascript)

7. Para transpilar de forma automática
   7.1 Adicionar em scripts no package.json
   7.1.1 "dev": "ts-node-dev app.ts"
   7.2 npm run dev
