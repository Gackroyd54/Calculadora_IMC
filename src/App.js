import './App.css';
import React,{useState} from 'react'

function App() {
  const [peso,setPeso] = useState("")
  const [altura,setAltura] = useState("")
  const [imc,setImc] = useState("")
  const calculaIMC =(altura,peso)=>{
    setPeso("")
    setAltura("")
    setImc((Number(peso)/(Number(altura)**2)).toFixed(2))


  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Calculadora de IMC</h1>

      <div className='info'>
        <label>Informe seu peso:</label><br/>
        <input type="number" placeholder='Peso' value = {peso} onChange={(e)=>setPeso(e.target.value)}/><br/>
        <label>Informe sua altura:</label><br/>
        <input type="number" placeholder='Altura' value={altura} onChange={(e)=>setAltura(e.target.value)}/>
        <br/>
        <button onClick={()=>calculaIMC(altura,peso)}>Calcular</button>
        <h2>Resultado: {imc}</h2>
      </div>
    <div className="tabela">
      <table border="2"  >
        <tr>
        <th>Classificação</th><th>IMC</th>        
        </tr>
      
        
        <td>Abaixo do peso</td>
        <td>Abaixo de 18,5</td>
        <tr/>
        <tr>
        <td>Peso Normal</td>
        <td>Entre 18,5 e 24,9</td>
         
        </tr>
        <tr>
        <td>Sobrepeso</td>
        <td>Entre 25 e 29,9</td>
         
        </tr>
        <tr>
        <td>Obesidade Grau 1</td>
        <td>Entre 30 e 34,9</td>
         
        </tr>
        <tr>
        <td>Obesidade Grau 2</td>
        <td>Entre 35 e 39,9</td>
         
        </tr>
        <tr>
        <td>Obesidade grau 3 ou mórbida</td>
        <td>Acima de 40</td>
         
        </tr>
        
        

        
        
      </table>
      
    </div>
    </div>
  );
}

export default App;
