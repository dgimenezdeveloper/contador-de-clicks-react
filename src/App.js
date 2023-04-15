import './App.css';
import Boton from './componenetes/Boton';
import Contador from './componenetes/Contador';
import contador from './imagenes/CONTADOR.gif'
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className='App'>
      <div className='frecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={contador} 
        alt='Logo de freecodecamp' 
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Click'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
