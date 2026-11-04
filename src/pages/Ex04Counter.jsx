import { useCounter } from "../hooks/useCounter";
import Conceito from "../components/Conceito";

function Contador({ nome, inicial }) {
  const { valor, incrementar, decrementar, resetar } = useCounter(inicial);
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p className="big">{valor}</p>
      <button onClick={decrementar}>−</button>
      <button onClick={resetar}>Resetar</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default function Ex04Counter() {
  return (
    <>
      <h1>04 · Custom hook: useCounter</h1>
      <Conceito
        recurso="Custom hook"
        quando="para reutilizar lógica com estado entre componentes. Cada chamada cria seu próprio estado: A e B são independentes."
        evitar="usar um custom hook para compartilhar estado entre componentes; isso é papel do Context."
      />
      <p>Mesma lógica reutilizada, estados independentes.</p>
      <div className="cards">
        <Contador nome="Contador A" inicial={0} />
        <Contador nome="Contador B" inicial={10} />
      </div>
    </>
  );
}
