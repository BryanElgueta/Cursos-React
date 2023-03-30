import html2canvas from 'html2canvas';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setimagen] = useState('');

  const onChangeLinea1 = function(evento) {

    setLinea1(evento.target.value)

  }

  const onChangeLinea2 = function(evento) {

    setLinea2(evento.target.value)

  }

  const onChangeimagen = function(evento) {

    setimagen(evento.target.value)

  }

  const onClickExportar = function(evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/jpg");
      
      var link = document.createElement('a');
      link.download ='meme.jpg';
      link.href = img;
      link.click();

  });

  }

  return (
    <div className="App">
     
     <select onChange={onChangeimagen}>
      <option disabled selected>Seleccione una imagen</option>
      <option value="fire">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="history">History</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">Philosoraptor</option>
      <option value="smart">Smart Guy</option>
     </select> <br/>

     <input onChange={onChangeLinea1} type="text" placeholder="linea 1" /><br/>
     <input onChange={onChangeLinea2} type="text" placeholder="linea 2"/> <br/>
     <button onClick={onClickExportar}>Exportar</button>

     <div className='meme' id='meme'>
      <span>{linea1}</span> <br/>
      <span>{linea2}</span>
      <img src={"/img/"+ imagen +".jpg"} />
     </div>

    </div>
  );
}

export default App;
