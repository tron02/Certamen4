import React from 'react';

function List({ items, deleteItem, editItem }) {
  const calcularEscala = (promedio) => {
    const nota = parseFloat(promedio);
    if (nota >= 6.5 && nota <= 7.0) return 'Destacado';
    if (nota >= 5.6 && nota <= 6.4) return 'Buen trabajo';
    if (nota >= 4.0 && nota <= 5.5) return 'Con mejora';
    if (nota >= 1.0 && nota <= 3.9) return 'Deficiente';
    return 'Valor inválido';
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Asignatura</th>
          <th>Promedio</th>
          <th>Escala</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.asignatura}</td>
            <td>{item.promedio}</td>
            <td>{calcularEscala(item.promedio)}</td>
            <td>
              <button onClick={() => editItem(item)}>Editar</button>
              <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
