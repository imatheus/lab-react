import { useEffect, useState } from "react";
import Conceito from "../components/Conceito";

export default function Ex02Resize() {
  const [largura, setLargura] = useState(window.innerWidth);
  const [altura, setAltura] = useState(window.innerHeight);

  useEffect(() => {
    function aoRedimensionar() {
      setLargura(window.innerWidth);
      setAltura(window.innerHeight);
    }
    // Registra o listener no sistema externo (janela do navegador).
    window.addEventListener("resize", aoRedimensionar);
    // Cleanup: remove o listener ao desmontar, evitando listeners antigos ativos.
    return () => window.removeEventListener("resize", aoRedimensionar);
  }, []); // [] = configura na montagem e limpa na desmontagem

  return (
    <>
      <h1>02 · useEffect: evento resize</h1>
      <Conceito
        recurso="useEffect com cleanup"
        quando="ao registrar listeners, timers ou conexões: o return do efeito desfaz o trabalho na desmontagem. Dependências [] = configura na montagem."
        evitar="esquecer o cleanup, que deixa listeners antigos ativos."
      />
      <p className="big">{largura} × {altura}px</p>
      <p>{largura < 768 ? "Layout mobile" : "Layout desktop"} — redimensione a janela.</p>
    </>
  );
}
