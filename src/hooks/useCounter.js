import { useState } from "react";

// Custom hook: encapsula a lógica de um contador reutilizável.
export function useCounter(inicial = 0) {
  const [valor, setValor] = useState(inicial);
  const incrementar = () => setValor((v) => v + 1);
  const decrementar = () => setValor((v) => v - 1);
  const resetar = () => setValor(inicial);
  return { valor, incrementar, decrementar, resetar };
}
