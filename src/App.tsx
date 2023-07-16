import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Title from './components/title';
import ListaServicos from './components/ListaServicos';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [servicos, setServicos] = useState<any[]>([]);

  function handleFormulario() {
    setMostrarFormulario(true);
  }

  function handleCancelar() {
    setMostrarFormulario(false);
  }

  const handleCancelarFormulario = () => {
    handleCancelar();
  };

  const handleCadastrarServico = (novoServico: any) => {
    setServicos((servicosAtuais) => [...servicosAtuais, novoServico]);
    setMostrarFormulario(false);
  };

  const handleRemoverServico = (servico: any) => {
    setServicos((servicosAtuais) => servicosAtuais.filter((s) => s !== servico));
  };

  return (
    <div>
      <Title />
      {!mostrarFormulario && (
        <button onClick={ handleFormulario }>Cadastrar nova senha</button>
      )}
      {mostrarFormulario && (
        <Form
          onCancel={ handleCancelarFormulario }
          onCadastrar={ handleCadastrarServico }
        />
      )}
      <ListaServicos
        servicos={ servicos }
        onRemoverServico={ handleRemoverServico }
      />
    </div>
  );
}

export default App;
