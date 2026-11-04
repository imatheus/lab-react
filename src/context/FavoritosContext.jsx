import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoritosContext = createContext(null);

export function FavoritosProvider({ children }) {
  // Estado compartilhado via Context e persistido no localStorage.
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", []);

  const alternar = (item) =>
    setFavoritos((atual) =>
      atual.includes(item) ? atual.filter((f) => f !== item) : [...atual, item]
    );

  return (
    <FavoritosContext.Provider value={{ favoritos, alternar }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext);
  if (!ctx) throw new Error("useFavoritos deve ser usado dentro de FavoritosProvider");
  return ctx;
}
