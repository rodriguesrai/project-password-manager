import React, { useState } from 'react';
import Swal from 'sweetalert2';

type FormProps = {
  onCancel: () => void;
  onCadastrar: (servico: any) => void;
};

function Form({ onCancel, onCadastrar }: FormProps) {
  const [name, setName] = useState(''); // controla inputs
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(false);

  const [minCaract, setHasMinLength] = useState(false);// estado dos <p>
  const [maxCaract, setHasMaxLength] = useState(false);
  const [LettersAndNumbers, setHasLettersAndNumbers] = useState(false);
  const [Special, setHasSpecialChars] = useState(false);

  function handleCadastrar() {
    if (isValid && name && login && password && url) {
      const servico = {
        name,
        login,
        password,
        url,
      };
      onCadastrar(servico);
      exibirAlerta();
    }
  }

  function exibirAlerta() {
    Swal.fire({ text: 'Serviço cadastrado com sucesso', timer: 1500 });
  }

  function validatePassword(passwordValue: string) {
    const hasEightCharacters = passwordValue.length >= 8; // verifica senhas
    const hasSixteenCharacters = passwordValue.length <= 16;
    const hasLetters = /[a-zA-Z]/.test(passwordValue);
    const hasNumbers = /\d/.test(passwordValue);
    const hasSpecialChars = /[^a-zA-Z0-9]/.test(passwordValue);

    setHasMinLength(hasEightCharacters); // atualiza estado dos <p>
    setHasMaxLength(hasSixteenCharacters);
    setHasLettersAndNumbers(hasLetters && hasNumbers);
    setHasSpecialChars(hasSpecialChars);
    return (
      hasEightCharacters
      && hasSixteenCharacters
      && hasLetters
      && hasNumbers
      && hasSpecialChars
    );
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) { // onChange dos inputs
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
        {!minCaract ? (
          <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
        ) : (
          <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
        )}
        {!maxCaract ? (
          <p className="invalid-password-check">Possuir até 16 caracteres</p>
        ) : (
          <p className="valid-password-check">Possuir até 16 caracteres</p>
        )}
        {!LettersAndNumbers ? (
          <p className="invalid-password-check">Possuir letras e números</p>
        ) : (
          <p className="valid-password-check">Possuir letras e números</p>
        )}
        {!Special ? (
          <p className="invalid-password-check">Possuir algum caractere especial</p>
        ) : (
          <p className="valid-password-check">Possuir algum caractere especial</p>
        )}
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
