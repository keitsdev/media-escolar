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

  const calculo = (e) => {
    e.preventDefault();

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
      sit = "recuperacao";
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

  const msg = () => {
    const aluno = nome.trim() || "estudante";
    if (situacao === "aprovado") {
      return `Parabéns, ${aluno}! Você foi aprovado(a) com média ${media}.`;
    } else if (situacao === "recuperacao") {
      return `${aluno}, você ficou de recuperação com média ${media}. Estude mais.`;
    } else {
      return `${aluno}, você infelizmente foi reprovado(a) com média ${media}. Boa sorte na próxima vez.`;
    }
  };

  return (
    <div className='corpo'>
      <div className='calc'>
        <div className='cabecalho'>
          <h1>Calculadora de Média</h1>
          <h2>Descubra sua média e situação atual</h2>
        </div>

          <form onSubmit={calculo}>
            <div className='inputs'>
              <label htmlFor="nome">Nome:</label>
              <input 
                name='nome'
                type="text"
                id='nome'
                placeholder='Digite o nome do estudante'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className='notas'>
              <div className='inputs'>
                <label htmlFor='av1'>Primeira avaliação:</label>
                <input
                  name='av1'
                  type="number"
                  step='0.1'
                  id='av1'
                  placeholder='1ª nota'
                  value={av1}
                  onChange={(e) => setAv1(e.target.value)}
                />
              </div>

              <div className='inputs'>
                <label htmlFor='av2'>Segunda avaliação:</label>
                <input
                  name='av2'
                  type="number"
                  step='0.1'
                  id='av2'
                  placeholder='2ª nota'
                  value={av2}
                  onChange={(e) => setAv2(e.target.value)}
                />
              </div>

              <div className='inputs'>
                <label htmlFor='av3'>Terceira avaliação:</label>
                <input
                  name='av3'
                  type="number"
                  step='0.1'
                  id='av3'
                  placeholder='3ª nota'
                  value={av3}
                  onChange={(e) => setAv3(e.target.value)}
                />
              </div>

              <div className='inputs'>
                <label htmlFor='av4'>Quarta avaliação:</label>
                <input
                  name='av4'
                  type="number"
                  step='0.1'
                  id='av4'
                  placeholder='4ª nota'
                  value={av4}
                  onChange={(e) => setAv4(e.target.value)}
                />
              </div>
            </div>

            <div className='btns'>
              <button
                type="submit"
                className='btn01'>Resultado</button>

              <button
                type="button"
                onClick={limpar}
                className='btn02'>Limpar</button>
          </div>

          </form>

          {situacao && media && (
            <div className={`resultado-box ${situacao}`}>
              <h3>Resultado:</h3>
              <p>{msg()}</p>
            </div>
          )}

      </div>
    </div>
  )
}

export default App;
