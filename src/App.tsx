import React, { useState } from 'react';
import Form from './components/Form';
import Title from './components/title';
import ListaServicos from './components/ListaServicos';
import './App.css';

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
    <div className="main-container">
      <div className="main">
        <Title />
        {!mostrarFormulario && (
          <button
            className="button-senha"
            onClick={ handleFormulario }
          >
            Cadastrar nova senha
          </button>
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
    </div>
  );
}

export default App;
