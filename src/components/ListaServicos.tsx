import React from 'react';

type ListaServicosProps = {
  servicos: any[];
  onRemoverServico: (servico: any) => void;
};

function ListaServicos({ servicos, onRemoverServico }: ListaServicosProps) {
  function handleRemoverServico(servico: any) {
    onRemoverServico(servico);
  }

  if (servicos.length === 0) {
    return <p>Nenhuma senha cadastrada.</p>;
  }
  return (
    <div>
      {servicos.map((servico, index) => (
        <div key={ index }>
          <h3>
            <a href={ servico.url } target="_blank" rel="noopener noreferrer">
              {servico.name}
            </a>
          </h3>
          <p>
            {servico.login}
          </p>
          <p>
            Senha:
            {servico.password}
          </p>
          <button
            onClick={ () => handleRemoverServico(servico) }
            data-testid="remove-btn"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaServicos;
