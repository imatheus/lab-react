import { useFavoritos } from "../context/FavoritosContext";
import Conceito from "../components/Conceito";

const linguagens = ["JavaScript", "Python", "Java", "C#", "Go"];

export default function Ex05Favoritos() {
  // Context fornece o estado; useLocalStorage (dentro do Provider) o persiste.
  const { favoritos, alternar } = useFavoritos();

  return (
    <>
      <h1>05 · useLocalStorage + Context: favoritos</h1>
      <Conceito
        recurso="Custom hook + useEffect + Context"
        quando="o Context compartilha os favoritos entre rotas; o useLocalStorage grava a cada mudança e lê o valor salvo ao iniciar, então sobrevive ao recarregar."
        evitar="guardar dados sensíveis no localStorage."
      />
      <p>Navegue e recarregue a página: os favoritos persistem.</p>
      <ul className="tarefas">
        {linguagens.map((l) => (
          <li key={l}>
            {l}
            <button onClick={() => alternar(l)}>
              {favoritos.includes(l) ? "★ Favorito" : "☆ Favoritar"}
            </button>
          </li>
        ))}
      </ul>
      <p>Favoritos: {favoritos.join(", ") || "nenhum"}</p>
    </>
  );
}
