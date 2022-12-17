import axios from 'axios';
import { useState } from 'react';

let oldSearch = '', gatilho = false;

const Api = (props) => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';
  const [result, setResult] = useState('');

  if (oldSearch !== props.valueSearch) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.valueSearch}&appid=${keyID}&units=metric`)
      .then(res => {
        const { main, name, sys, weather } = res.data;
        if (sys !== undefined) {
          if (weather !== undefined) {
            setResult(res.data);

            console.log('THALIA: Deu certo aqui na API');
            console.log('THALIA: Olha só oq eu consegui ^^');
            console.log('THALIA: ', main, name, sys, weather);

            oldSearch = props.valueSearch;
            gatilho = true;
          }
        }
      });
  } else if (gatilho) { gatilho = false; }

  if (!gatilho) {
    gatilho = true;
    oldSearch = '';
  }

  const { main, name, sys, weather } = result;
  return (
    <div className="flex justify-center mt-4">
      <div className='flex flex-col items-center'>
        <div className='flex'>
          <h1 className='font-extrabold'>{Math.round(main?.temp)}°</h1>
          <h4 className='ml-1 font-extrabold'>{sys?.country}</h4>
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='font-extrabold'>{name}</h4>
          {(weather !== undefined) ? <h4 className='font-medium'>{weather[0]['description']}</h4> : <h4>Carregando...</h4>}
        </div>
      </div>
      <div className='flex flex-col items-center ml-4'>
        <h4>🌡️</h4>
        <div className='flex flex-col items-center'>
          <h4 className='font-medium'>Máx<span>↑</span>{Math.round(main?.temp_max)}°</h4>
          <h4 className='font-medium'>Mín<span>↓</span>{Math.round(main?.temp_min)}°</h4>
        </div>
      </div>
    </div>
  );

}

export default Api;