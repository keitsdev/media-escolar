import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [av1, setAv1] = useState('');
  const [av2, setAv2] = useState('');
  const [av3, setAv3] = useState('');
  const [av4, setAv4] = useState('');
  const [media, setMedia] = useState('');
  const [situacao, setSituacao] = useState('');

  const calculo = () => {
    let av1Float = parseFloat(av1);
    let av2Float = parseFloat(av2);
    let av3Float = parseFloat(av3);
    let av4Float = parseFloat(av4);

    if (
      isNaN(av1Float) || isNaN(av2Float) || isNaN(av3Float) || isNaN(av4Float) ||
      av1Float < 0 || av1Float > 10 ||
      av2Float < 0 || av2Float > 10 ||
      av3Float < 0 || av3Float > 10 ||
      av4Float < 0 || av4Float > 10
    ){
      alert("Utilize valores válidos!");
      return;
    }

    const med = (av1Float + av2Float + av3Float + av4Float) / 4;
    setMedia(med.toFixed(1));

    let sit = '';
    if (med >= 7){
      sit = "aprovado";
    } else if (med <= 6.9 && med >= 5){
      sit = "recuperação";
    } else {
      sit = "reprovado";
    }

    setSituacao(sit);
  };

  const limpar = () => {
    setNome('');
    setAv1('');
    setAv2('');
    setAv3('');
    setAv4('');
    setMedia('');
    setSituacao('');
  };

  return (
    <>
      <section id="center">
        <div>
          <h1>Calculadora de Média</h1>
          <h2>Descubra sua média e situação atual</h2>
        </div>

        <div>
          <form action="get">
            <div>
              <label>Nome:</label>
              <input 
                name='nome'
                type="text"
                id='nome'
                placeholder='Digite o nome do estudante'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div>
              <label>Primeira avaliação:</label>
              <input
                name='av1'
                type="number"
                id='av1'
                placeholder='Informe a primeira nota'
                value={av1}
                onChange={(e) => setAv1(e.target.value)}
              />
            </div>

            <div>
              <label>Segunda avaliação:</label>
              <input
                name='av2'
                type="number"
                id='av2'
                placeholder='Informe a segunda nota'
                value={av2}
                onChange={(e) => setAv2(e.target.value)}
              />
            </div>

            <div>
              <label>Terceira avaliação:</label>
              <input
                name='av3'
                type="number"
                id='av3'
                placeholder='Informe a terceira nota'
                value={av3}
                onChange={(e) => setAv3(e.target.value)}
              />
            </div>

            <div>
              <label>Quarta avaliação:</label>
              <input
                name='av4'
                type="number"
                id='av4'
                placeholder='Informe a quarta nota'
                value={av4}
                onChange={(e) => setAv4(e.target.value)}
              />
            </div>
          </form>

          <div>
            <div>
              <button onClick={calculo}>Resultado</button>
            </div>

            <div>
              <button onClick={limpar}>Limpar</button>
            </div>
          </div>

          {nome && situacao && media && (
            <div style={{marginTop: '20px'}}>
              <h2>Resultado:</h2>
              <p>O aluno {nome} está {situacao} com média {media}</p>
            </div>
          )
          }

        </div>
      </section>
    </>
  )
}

export default App;
