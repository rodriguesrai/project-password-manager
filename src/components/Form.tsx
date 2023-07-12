import React from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  function handleCadastrar() {

  }

  return (
    <div>
      <label>
        Nome do serviço:
        <input type="text" />
      </label>
      <label>
        Login
        <input type="text" />
      </label>
      <label>
        Senha
        <input type="password" />
      </label>
      <label>
        URL
        <input type="text" />
      </label>
      <button onClick={ handleCadastrar }>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </div>
  );
}

export default Form;
