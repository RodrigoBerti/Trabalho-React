import { useState} from 'react';
import './App.css';

function App() {
  const[numero, setNumero] = useState<number>();
  const[resultado, setResultado] = useState<string>('0');
  const [meuVetor, setItems] = useState<string[]>([]);

  const vetor = () => {
    setItems([...meuVetor, String(numero)])
  }

  const calcular = () =>{
    if(!!numero){
      const total = Number(resultado) + numero;
      setResultado(String(total));
      vetor();
    }else{
      const total = Number(resultado) + 0;
      setResultado(String(total))
      vetor();
    }
  }


  return (
    <div className='App'>
      <h1>Calculadora</h1>
      <label>Adicione o numero</label>
      <input 
        type='number'
        onChange={(e) => setNumero(Number(e))}
      />
      <button onClick={calcular}>
        Somar
      </button>

      <label>Rsultado {resultado}</label>
    </div>
  )
}

export default App
