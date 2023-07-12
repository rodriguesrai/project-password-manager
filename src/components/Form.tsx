import React, { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleCadastrar() {
    // Lógica para cadastrar
  }

  function validatePassword(passwordValue: string) {
    const hasEightCharacters = passwordValue.length >= 8;
    const hasSixteenCharacters = passwordValue.length <= 16;
    const hasLetters = /[a-zA-Z]/.test(passwordValue);
    const hasNumbers = /\d/.test(passwordValue);
    const hasSpecialChars = /[^a-zA-Z0-9]/.test(passwordValue);
    return (
      hasEightCharacters
      && hasSixteenCharacters
      && hasLetters
      && hasNumbers
      && hasSpecialChars
    );
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name: inputName, value } = event.target;

    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'login') {
      setLogin(value);
    } else if (inputName === 'password') {
      setPassword(value);
      setIsValid(validatePassword(value));
    } else if (inputName === 'url') {
      setUrl(value);
    }
  }

  return (
    <div>
      <label>
        Nome do serviço:
        <input
          name="name"
          value={ name }
          type="text"
          onChange={ handleInputChange }
        />
      </label>
      <label>
        Login:
        <input
          name="login"
          value={ login }
          type="text"
          onChange={ handleInputChange }
        />
      </label>
      <label>
        Senha:
        <input
          name="password"
          value={ password }
          type="password"
          onChange={ handleInputChange }
        />
      </label>
      <label>
        URL:
        <input
          name="url"
          value={ url }
          type="text"
          onChange={ handleInputChange }
        />
      </label>
      <button
        onClick={ handleCadastrar }
        disabled={ !isValid || !name || !login || !password || !url }
      >
        Cadastrar
      </button>
      <button onClick={ onCancel }>Cancelar</button>
    </div>
  );
}

export default Form;
