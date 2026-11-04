// Quadro didático: o que é, quando usar e quando evitar.
export default function Conceito({ recurso, quando, evitar }) {
  return (
    <aside className="conceito">
      <strong>{recurso}</strong>
      <p><b>Quando usar:</b> {quando}</p>
      <p><b>Evite:</b> {evitar}</p>
    </aside>
  );
}
