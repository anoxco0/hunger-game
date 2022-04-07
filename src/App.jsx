import { useState } from 'react';
import './App.css';
import { AddRestaurant } from './conponents/AddRestaurant';
import { ShowRestaurent } from './conponents/ShowRestaurant';

function App() {
  const [btn, setBtn] = useState(true)
  const changeBtn = () =>{
    if(btn === true ) setBtn(false)
    else setBtn(true)
  }
  return (
    <div className="App">
      <div style={{width:'110px', margin:'auto'}}>
        <button style={{width:'100%'}} onClick={()=>{changeBtn()}}>{btn?'Add Restaurant':'ShowRestaurent'}</button>
      </div>
       {btn?<ShowRestaurent/>:<AddRestaurant />}
    </div>
  );
}

export default App;
