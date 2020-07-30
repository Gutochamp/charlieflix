import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(chave, valor) {
        setValores({
            ...valores,
            [chave]: valor,
        })
    }

    function handleChange(infoEvento) {
        const { getAttribute, value } = infoEvento.target;
        setValor(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria: {valores.nome}
            </h1>

            <form onSubmit={function HandleSubmit(infoEvento) {
                infoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);

                setValores(valoresIniciais);
            }}>
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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;