## Instalação

Uma das formas de inicializar um projeto React é usando a ferramenta `create-react-app`

```bash
npx create-react-app nome-do-seu-aplicativo
```

> Se você já estiver na pasta que criou para o seu projeto React, é só usar `npx create-react-app .`

O `create-react-app` gera todas as pastas e arquivos que o app precisa para funcionar. Nós apenas devemos modificar os arquivos na pasta `src/`, pois os arquivos na pasta `public/` são gerenciados automaticamente pelo React (salvo algumas excessões)

## Abrindo o servidor de desenvolvimento

Para iniciar um servidor de desenvolvimento (similar ao LiveServer), executamos `npm start` no terminal, dentro da pasta que contém o `package.json`. O React vai abrir uma nova janela do navegador, com a aplicação sendo executada, e automaticamente recarrega a página quando ocorre qualquer modificação nos arquivos da pasta `/src`.

Dentro da pasta `/src`, só necessitamos de 2 arquivos: `index.js`, que é o ponto de entrada da aplicação e deve conter o código para inicializar o ReactDOM, e o `App.js`, que contém o componente principal da aplicação.

## Os três pilares do React, parte 1: JSX

JSX (JavaScript eXtended) é uma sintaxe que nos permite escrever HTML dentro do Javascript. Isso tem algumas vantages, como por exemplo interpolar variáveis diretamente no nosso HTML, ou quebrar a aplicação em diferentes componentes que já tem definidos tanto sua apresentação (HTML e CSS) quanto seu comportamento (Javascript).

> Todo o JSX é convertido em HTML pelo React no momento que executamos o `npm start`, por isso que não precisamos modificar o arquivo `index.html`.

### Regras do JSX

1. Para interpolar (interpretar o valor da variável) expressões do Javascript ou variáveis com o nosso HTML, usamos um par de chaves `{}`

```javascript
const name = "Pedro";

function App() {
  return (
    <div>
      <h1>Bem-vindo ao React, {name}</h1>
    </div>
  );
}

export default App;
```

2. Funções que retornam JSX não podem retornar mais de um elemento no mesmo nível, obrigatoriamente você precisa de um único elemento HTML sendo retornado da função

```javascript
function App() {
  return (
    <header><img src="logo" /></header>
    <div>
      <h1>Bem-vindo ao React, {name}</h1>
    </div>
  );
}
```

> O resultado do código acima é um erro de sintaxe: `Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`

```javascript
function App() {
  return (
    <div>
      <header>
        <img src="logo" />
      </header>
      <div>
        <h1>Bem-vindo ao React, {name}</h1>
      </div>
    </div>
  );
}
```

> Consertamos no código acima colocando uma `<div>` em volta dos outros 2 elementos

3. A interpolação de Javascript no JSX não aceita blocos de código, somente expressões com algum de valor de retorno definido

```javascript
  return (
    <div>
      <header>
        <img src="logo" />
      </header>
      <div>
        {const name = "Pedro";} {/* Unexpect Token, pois const determina uma declaração de variável, que não tem valor de retorno definido  */}
        <h1>Bem-vindo ao React, {name}</h1>
      </div>
    </div>
  );

```

> Exemplos de coisas proibidas dentro do JSX: declaração de funções e variáveis e blocos de controle (if/else, while, for, switch, try/catch)

4. As tags do JSX suportam praticamente os mesmos atributos das tags do HTML, com 2 diferenças

a. O atributo `for`, usado para identificar campos (labels) de formulário em leitores de tela, passa a ser `htmlFor`

b. O atributo `class`, usando para definir classes do CSS no elemento, passa a ser `className`

```javascript
<div class="container">
  <h1>Bem-vindo ao React, {name}</h1>
</div>
```

> O código acima gera o seguinte erro: `Warning: Invalid DOM property `class`. Did you mean `className`?`

5. Nomes de atributo do HTML que eram separados por '-' ou sem separação, no JSX passam a ser separados por camelCase

```javascript
<div style="background-color: red;">
  <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
</div>
```

> O código acima gera o seguinte erro: `Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.``

O correto seria

```javascript
<div style={{ backgroundColor: "red" }}>
  <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
</div>
```

> No exemplo acima, os dois pares de chave representam um objeto literal (o par de dentro) e uma expressão javascript (o par de fora)

6. No JSX, imagens armazenadas localmente precisam ser importadas antes de serem utilizadas em uma tag `<img />`

```javascript
<img src="./download.svg" />
```

> O cógido acima não renderiza nenhuma imagem, pois não importamos a imagem antes de usá-la.

O correto seria:

```javascript
import logo from "./download.svg";
const name = "Pedro";

function App() {
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div>
        <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
      </div>
    </div>
  );
}
```

7. Para importar um arquivo CSS, podemos importar diretamente no javascript

```javascript
import "./style.css";
const name = "Pedro";

function App() {
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div>
        <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
      </div>
    </div>
  );
}

export default App;
```

> Não é necessário atribuir o CSS importado para nenhuma variável

## Renderização condicional e listas

### Listas

No JSX, podemos usar o método de array `map` para dinamicamente renderizar uma lista:

```javascript
const students = [
  "Anderson",
  "Alexandre",
  "Rafael",
  "Vagner",
  "Kamila",
  "Wagner",
];
<ul>
  {students.map((student) => {
    return <li>{student}</li>;
  })}
</ul>;
```

> OBS.: Precisamos usar um método de array que retorne uma nova array, caso contrário o React não irá renderizar nada (por exemplo caso tivessemos usado o `forEach`)

### Renderização condicional

```javascript
<ul>
  {students.map((student, index) => {
    const isEven = index % 2 === 0;

    return <li className={isEven ? "even" : ""}>{student}</li>;
  })}
</ul>
```

> Podemos usar um operador ternário para renderização condicional, pois ele sempre tem um valor de retorno definido

Caso quiséssemos usar if/else para esse exemplo, teríamos a seguinte sintaxe:

```javascript
<ul>
  {students.map((student, index) => {
    const isEven = index % 2 === 0;

    if (isEven) {
      return <li className="even">{student}</li>;
    } else {
      return <li>{student}</li>;
    }
  })}
</ul>
```

Também podemos determinar se determinadas vão ser renderizadas ou não usando o operador ternário

```javascript
<ul>
  {students.map((student, index) => {
    const isEven = index % 2 === 0;

    return (
      <li className={isEven ? "even" : ""}>
        {student}
        {isEven ? <span>&#10003;</span> : null}
      </li>
    );
  })}
</ul>
```

> Note que a tag `<span>` só aparece quando a variável `isEven` vale `true`

### Componentes

No React, um componente é uma função ou classe que retorna JSX. Os componentes nos permitem dividir a aplicação em "pedacinhos" de interface, cada um com seu próprio comportamente e visual.

Para definir um componente, basta definir uma função que retorna JSX

```javascript
function StudentList() {
  return (
    <div>
      <h2>Nossa turma: </h2>

      <ul>
        {students.map((student, index) => {
          const isEven = index % 2 === 0;

          return (
            <li className={isEven ? "even" : ""}>
              {student}
              {isEven ? <span>&#10003;</span> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

Para usar um componente dentro de outro componente, primeiro importamos o componente, depois o utilizamos dentro do JSX como se ele fosse uma tag do HTML:

```javascript
import logo from "./download.svg";
import "./style.css";
// Importando nosso componente de outro arquivo
import StudentList from "./StudentList";

const name = "Pedro";

function App() {
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div>
        <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
      </div>
      {/* // Renderizando o componente dentro de App */}
      <StudentList />
    </div>
  );
}

export default App;
```

> Dentro do JSX, para usar (invocar) componentes, obrigatoriamente precisamos iniciar o nome do componente com letra maiúscula. Caso contrário, o JSX "pensa" que você está tentando usar uma tag do HTML e gera um erro. Por esse motivo, arquivos que contém componentes costumam começar também com letra maiúscula

```javascript
function App() {
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div>
        <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
      </div>
      {/* // Renderizando o componente dentro de App */}
      <studentList />
    </div>
  );
}

export default App;
```

> O código acima gera o seguinte erro: `Warning: The tag <studentList> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.`
