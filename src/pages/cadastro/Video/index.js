import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((listaCategorias) => {
        setCategorias(listaCategorias);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={(eventInfo) => {
        eventInfo.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.titulo);

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField
          value={valores.titulo}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="titulo"
          type="text"
          labelText="Título do Vídeo:"
        />

        <FormField
          value={valores.categoria}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="categoria"
          type="text"
          labelText="Categoria:"
          suggestions={
            categoryTitles
          }
        />

        <FormField
          value={valores.url}
          onChange={(infoEvento) => (handleChange(infoEvento))}
          name="url"
          type="text"
          labelText="URL do Vídeo:"
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
