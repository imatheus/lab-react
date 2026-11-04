import { useEffect, useState } from "react";

// Como useState, mas sincroniza o valor com o localStorage.
export function useLocalStorage(chave, inicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave);
      return salvo !== null ? JSON.parse(salvo) : inicial;
    } catch {
      return inicial;
    }
  });

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor];
}
