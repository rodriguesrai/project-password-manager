import React from 'react';

type ListaServicosProps = {
  servicos: any[];
};

function ListaServicos({ servicos }: ListaServicosProps) {
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
            Login:
            {servico.login}
          </p>
          <p>
            Senha:
            {servico.password}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListaServicos;
