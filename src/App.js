import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#0000ff'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#00700f'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#96eb00'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#d40f18'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db079e'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#970be3'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff5e00'
    }
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'Analista QA',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'Desenvolvedor',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'CEO',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'CTO',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'Analista de Infraestrutura',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'Estagiário de Suporte',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Leonardo Lima',
      cargo: 'Product Owner',
      imagem: 'https://avatars.githubusercontent.com/u/23489043?v=4',
      time: times[6].nome
    }
  ])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCor(cor, id){
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />

      {times.map((time, indice) => 
        <Time 
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCor}
          key={indice} 
          time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          aoDeletar={deletarColaborador}
        />
      )}

      <Rodape />

    </div>
  );
}

export default App;
