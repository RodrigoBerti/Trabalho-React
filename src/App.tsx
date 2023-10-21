import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[numero, setNumero] = useState(0);
  const[operacao, setOperacao] = useState('Somar')
  const[resultado, setResultado] = useState(0);

  const calcular = () =>{
    if(operacao=='Somar')
      return parseFloat(resultado) =(parseFloat(numero) + parseFloat(resultado))
  }

  useEffect(()=>{
    setResultado(calcular());
  }, [numero,resultado])
  return (
    <div className='App'>
      <h1>Calculadora</h1>
      <label>Adicione o numero</label>
      <input 
        type='number'
        value={numero}
        onChange={(e) => setNumero(e.target.valueAsNumber)}
      />
      <select onChange={(e) => setOperacao(e.target.value)}>
          <option>Somar</option>
      </select>

      <label>Rsultado {resultado}</label>
    </div>
  )
}

export default App
