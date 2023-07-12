import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Title from './components/title';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  function handleFormulario() {
    setMostrarFormulario(true);
  }

  function handleCancelar() {
    setMostrarFormulario(false);
  }

  const handleCancelarFormulario = () => {
    handleCancelar();
  };

  return (
    <div>
      <Title />
      {!mostrarFormulario && (
        <button onClick={ handleFormulario }>Cadastrar nova senha</button>
      )}
      {mostrarFormulario && <Form onCancel={ handleCancelarFormulario } />}
    </div>
  );
}

export default App;
