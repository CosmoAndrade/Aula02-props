import "./styles.css";

function Equipe(props) {
  return (
    <>
      <Sobre userName={props.nome} cargo={props.cargo} idade={props.idade} />
      <hr />
    </>
  );
}

function Sobre(props) {
  return (
    <>
      <h2>Olá sou {props.userName}</h2>
      <h3>Cargo:{props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="16" />
      <Equipe nome="Felipe" cargo="Programador" idade="18" />
    </div>
  );
}
