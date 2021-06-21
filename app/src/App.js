import logo from "./download.svg";
import "./style.css";
// Importando nosso componente de outro arquivo
import StudentList from "./StudentList";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <StudentList />
    </div>
  );
}

export default App;
