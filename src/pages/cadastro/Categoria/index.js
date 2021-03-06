import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

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
        {valores.titulo}
      </h1>

      <form onSubmit={function HandleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        clearForm();
      }}
      >
        <FormField
          value={valores.titulo}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="titulo"
          type="text"
          labelText="Título da Categoria:"
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
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
