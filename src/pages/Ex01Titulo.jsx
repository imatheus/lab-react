import { useEffect, useState } from "react";
import Conceito from "../components/Conceito";

export default function Ex01Titulo() {
  // Estado local: o que a interface precisa lembrar.
  const [cliques, setCliques] = useState(0);

  // Efeito: sincroniza o título da aba (sistema externo) com o estado.
  // O array [cliques] faz o efeito rodar de novo apenas quando 'cliques' muda.
  useEffect(() => {
    const original = document.title;
    document.title = `Cliques: ${cliques}`;
    // Cleanup: restaura o título quando a página sai de cena.
    return () => {
      document.title = original;
    };
  }, [cliques]);

  return (
    <>
      <h1>01 · useEffect: título da aba</h1>
      <Conceito
        recurso="useEffect + useState"
        quando="useState guarda o que a interface precisa lembrar (os cliques); useEffect sincroniza esse dado com um sistema externo (document.title)."
        evitar="usar useEffect para cálculos que podem ser feitos direto na renderização."
      />
      <p className="big">{cliques}</p>
      <button onClick={() => setCliques((c) => c + 1)}>Clicar</button>
      <p>Veja o título da aba do navegador acompanhar os cliques.</p>
    </>
  );
}
