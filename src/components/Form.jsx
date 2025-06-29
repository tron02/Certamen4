import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.nombre);
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !asignatura || promedio === '') return;

    const valor = parseFloat(promedio);
    if (valor < 1 || valor > 7) return;

    addOrUpdateItem({
      nombre,
      asignatura,
      promedio: valor
    });

    setNombre('');
    setAsignatura('');
    setPromedio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del alumno"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promedio (1.0 - 7.0)"
        value={promedio}
        onChange={(e) => {
          const valor = parseFloat(e.target.value);
          if (valor >= 1 && valor <= 7) {
            setPromedio(e.target.value);
          } else if (e.target.value === '') {
            setPromedio('');
          }
        }}
        min="1"
        max="7"
        step="0.1"
      />
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default Form;
