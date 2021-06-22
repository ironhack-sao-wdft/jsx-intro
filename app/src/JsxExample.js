import logo from "./download.svg";

// Importando nosso componente de outro arquivo
import StudentList from "./StudentList";

const name = "Pedro";

function JsxExample() {
  return;
  <div>
    <header>
      <img src={logo} />
    </header>
    <div>
      <h1>Bem-vindo ao React, {name.toUpperCase()}</h1>
    </div>
    <StudentList />
  </div>;
}

export default JsxExample;
