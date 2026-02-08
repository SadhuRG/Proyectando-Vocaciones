import { useParams } from 'react-router-dom';
import editionsData from '../data/editions.json'; // Importa JSON

const Edicion = () => {
  const { version } = useParams();
  const data = editionsData[version] || editionsData['3.0']; // Fallback a 3.0

  return (
    <div>
      <h1>{data.titulo}</h1>
      <p>{data.fecha}</p>
      {/* Renderiza secciones similares a Home, pero con data de esta edición */}
      {/* Ej: <Timeline items={data.cronograma.general} /> */}
    </div>
  );
};

export default Edicion;