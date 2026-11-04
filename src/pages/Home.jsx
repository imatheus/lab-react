const recursos = [
  ["Estado local (useState)", "Lembrar um dado que a interface exibe e altera.", "Ex. 1, 2"],
  ["Efeito (useEffect)", "Sincronizar com algo externo: título, eventos, localStorage.", "Ex. 1, 2, 5"],
  ["Contexto (Context + Provider)", "Compartilhar um valor entre muitos componentes sem prop drilling.", "Ex. 3"],
  ["Hook personalizado (use...)", "Reutilizar lógica com estado; cada chamada tem estado próprio.", "Ex. 4, 5"],
  ["Rotas (React Router)", "Trocar a página exibida pela URL, sem recarregar o documento.", "Menu lateral"],
];

export default function Home() {
  return (
    <>
      <h1>Aula 13 · Hooks, Context API e React Router</h1>
      <p>Escolha um exercício no menu lateral. Resumo de quando usar cada recurso:</p>
      <table className="resumo">
        <thead>
          <tr><th>Recurso</th><th>Quando usar</th><th>Onde ver</th></tr>
        </thead>
        <tbody>
          {recursos.map(([nome, quando, onde]) => (
            <tr key={nome}><td>{nome}</td><td>{quando}</td><td>{onde}</td></tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
