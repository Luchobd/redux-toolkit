import Characters from "./components/Characters";
import Detail from "./components/Detail";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Characters />
      {/* Falta traer React Router Dom y pasar Detail a una ruta aparte para que no de conflicto */}
      <Detail />
    </div>
  );
}

export default App;
