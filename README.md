# Gulp.js + BrowserSync: Automatizando a compilação de SCSS e atualização ao vivo

Este repositório contém um projeto básico configurado com Gulp.js, Sass e BrowserSync para automatizar a compilação de arquivos SCSS em CSS e atualizar o navegador em tempo real sempre que houver alterações.

## Requisitos

Certifique-se de ter o Node.js instalado em seu sistema antes de prosseguir.

## Instalação

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências: Use o comando `npm install` para instalar as dependências.

## Uso

Execute o seguinte comando para iniciar o servidor de desenvolvimento: `gulp`

Isso compilará os arquivos SCSS em CSS, iniciará o servidor local com BrowserSync e abrirá automaticamente o navegador. Agora, sempre que você fizer alterações nos arquivos SCSS, o Gulp.js irá compilá-los e o BrowserSync irá atualizar o navegador em tempo real.

## Estrutura do projeto

- `gulpfile.js`: Arquivo de configuração do Gulp.js com as tarefas para compilar o SCSS e iniciar o servidor.
- `src/`: Diretório que contém os arquivos do projeto.
  - `scss/`: Diretório para os arquivos SCSS.
  - `css/`: Diretório onde o Gulp.js irá gerar os arquivos CSS compilados.
  - `index.html`: Arquivo HTML básico com importações de arquivos CSS.

## Contribuição

Contribuições são bem-vindas! Se você tiver melhorias, correções de bugs ou novos recursos para adicionar, fique à vontade para abrir uma pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Recursos úteis

- [Gulp.js Documentation](https://gulpjs.com/docs/en/getting-started/quick-start)
- [BrowserSync Documentation](https://browsersync.io/docs)

