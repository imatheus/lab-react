import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritosProvider } from "./context/FavoritosContext";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* O App deve estar encapsulado ao BrowserRouter para o roteamento funcionar. */}
    <ThemeProvider>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </ThemeProvider>
  </BrowserRouter>
);
