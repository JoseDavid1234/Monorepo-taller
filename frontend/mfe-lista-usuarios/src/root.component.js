import React from 'react';
import ListaUsuarios from './components/ListaUsuarios'; // Asegúrate de importar correctamente el componente ListaUsuarios

// Datos de ejemplo para los usuarios
const usuarios = [
  { id: 1, nombre: 'Juan Perez', email: 'juan.perez@example.com' },
  { id: 2, nombre: 'María Gomez', email: 'maria.gomez@example.com' },
  // Añade más usuarios según sea necesario
];

export default function Root(props) {
  return (
    <section>
      <ListaUsuarios usuarios={usuarios} />
    </section>
  );
}
