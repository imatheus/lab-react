import { useTheme } from "../context/ThemeContext";
import Conceito from "../components/Conceito";

export default function Ex03Context() {
  const { tema, alternarTema } = useTheme();
  return (
    <>
      <h1>03 · Context API: tema</h1>
      <Conceito
        recurso="Context API + Provider"
        quando="quando muitos componentes distantes precisam do mesmo valor (tema, usuário logado), evitando prop drilling."
        evitar="colocar no contexto estado que só um componente usa; para isso, useState local."
      />
      <p>Tema atual: <strong>{tema}</strong></p>
      <button onClick={alternarTema}>Alternar tema</button>
      <p>Navegue para outra rota: o tema continua, pois o ThemeProvider fica acima das páginas.</p>
    </>
  );
}
