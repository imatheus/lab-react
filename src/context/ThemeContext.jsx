import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("claro");
  const alternarTema = () => setTema((t) => (t === "claro" ? "escuro" : "claro"));
  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook para consumir o contexto com checagem de uso dentro do Provider.
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  return ctx;
}
