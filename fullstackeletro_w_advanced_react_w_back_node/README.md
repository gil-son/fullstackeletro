# Info.:

## Resumo:
<p> O Google utiliza buscadores para encontrar as páginas. No entando só encontra páginas em HTML.</p>
<p> O React renderiza a página em JS, com isso os buscadores do Google não localizam a página. </p>
<p> Para reverter isso, será utilizado o React Next no lado do servidor apenas para a página Home ser encontrada.</p>
<p> Esse projeto tem a continuidade da versão React-frontend avançado com o Code-Splitting e Lazy Loading. </p>


## Executar:

### Frontend:
### Uso do React para as renderizações em JS
<p>No frontend ao iniciar, vai ser na porta 3001. Para iniciar 'npm start'</p>

### Backend:
### Uso do Node e React Next
<p>No backend a página Home é 100% renderizada em HTML na porta 3000. Para iniciar 'npm run dev'</p>
<p>No backend a requisição e resposta com o banco está na porta 3333. Para iniciar 'npm start'</p>


#### Então, para um melhor proveito é importante executar as 3 portas em 3 terminais. As portas estão configuradas em seus respectivos package.json

## Teste:
<p>1. Na página Home, aperte 'f12' ou 'botão direito - inspecionar'. </p>
<p>2. Clique na engrenagem superior ao lado direito.</p>
<p>3. Procure pelo checkbox 'Desabilitar Java Script' e marque.</p>
<p>4. Atualize a página e verá que o conteúdo continua lá, pois está com a sua conversão de JS para HTML, com o uso do Next.</p>
<p>5. Se testar em uma página que não está no lado do servidor com o Next, verá que o conteúdo não será renderizado, pois se encontra em JS.</p>
