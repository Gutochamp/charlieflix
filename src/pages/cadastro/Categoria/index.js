import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infoEvento) {
    setValor(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://charlieflix.herokuapp.com/categorias';
    fetch(URL).then(async (serverResponse) => {
      const response = await serverResponse.json();
      setCategorias([
        ...response,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={function HandleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >
        <FormField
          value={valores.nome}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="nome"
          type="text"
          labelText="Nome da Categoria:"
        />

        <FormField
          value={valores.descricao}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="descricao"
          type="multiline"
          labelText="Descrição:"
        />

        <FormField
          value={valores.cor}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="cor"
          type="color"
          labelText="Cor:"
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
