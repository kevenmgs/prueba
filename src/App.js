import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [linea1, setlinea1] = useState ('');
  const [linea2, setlinea2] = useState ("");
  const [imagen, setimagen] = useState ('');

  function transcribirLinea1(e){
    setlinea1(e.target.value);
  }

  function transcribirLinea2(e){
    setlinea2(e.target.value);
  }

  const pasarImagen = function (e){
    setimagen(e.target.value)
  }


  return (
    <div className="App">
      <select onChange={pasarImagen}>
        <option value="CIVIL">Ing.civil</option>
        <option value="BIOLOGIA">Biologia</option>
        <option value="ADMINISTRACION">Lic.Administracion</option>
      </select><br/>

      <input onChange={transcribirLinea1} type="text" placeholder="Texto 1"></input><br/>
      <input onChange={transcribirLinea2} type="text" placeholder="Texto 2"></input><br/>
      <button>Examinar</button>

      <div className='imagen'> 
        <b className='p1'>{linea1}</b><br/>
        <b className='p2'>{linea2}</b><br/>
        <img src={'/img/' + imagen +'.jpg'}/>
      </div>
    </div>
  );
}

export default App;
