import { NavLink, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Ex01Titulo from "./pages/Ex01Titulo";
import Ex02Resize from "./pages/Ex02Resize";
import Ex03Context from "./pages/Ex03Context";
import Ex04Counter from "./pages/Ex04Counter";
import Ex05Favoritos from "./pages/Ex05Favoritos";
import { useTheme } from "./context/ThemeContext";

const pages = [
  { path: "/", label: "Home" },
  { path: "/exercicio-1", label: "01 · Effect: título" },
  { path: "/exercicio-2", label: "02 · Effect: resize" },
  { path: "/exercicio-3", label: "03 · Context: tema" },
  { path: "/exercicio-4", label: "04 · Custom hook: contador" },
  { path: "/exercicio-5", label: "05 · useLocalStorage" },
];

export default function App() {
  const { tema } = useTheme();
  return (
    <div className={`layout ${tema}`}>
      <aside className="sidebar">
        <div className="brand">⚛ Laboratório React</div>
        <p>5 exercícios demonstrativos</p>
        <nav aria-label="Exercícios">
          {pages.map((pagina) => (
            // NavLink aplica 'active' automaticamente na rota selecionada.
            <NavLink key={pagina.path} to={pagina.path} end>
              {pagina.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercicio-1" element={<Ex01Titulo />} />
          <Route path="/exercicio-2" element={<Ex02Resize />} />
          <Route path="/exercicio-3" element={<Ex03Context />} />
          <Route path="/exercicio-4" element={<Ex04Counter />} />
          <Route path="/exercicio-5" element={<Ex05Favoritos />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </main>
    </div>
  );
}
