import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// interface Attribute {
//   getAttribute: Function;
//   value: String;
// }

function CadastroCategoria() {
  const valoreIniciais = {
    nome: 'Nome',
    descricao: 'Descrição',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoreIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    // setValues(valoreIniciais);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChangeCategoria(event) {
    // exemplo utilizando a Interface
    //  const { getAttribute, value }: Attribute = event.target;
    // setValue(getAttribute('name'), value)
    const name = event.target.getAttribute('name');
    const { value } = event.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const categoriasJson = await response.json();
      setCategorias([
        ...categoriasJson,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChangeCategoria}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChangeCategoria}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChangeCategoria}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading....
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.nome}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
