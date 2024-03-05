import './App.css';
import React, { useState } from 'react';

//1

const ButtonComponent = () =>{
  const [state, changeState] = useState(0);

  const increment = () =>{
    changeState(state+ 1);
  }
  return (
    <div>
      <p>Значение: {state}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  )
}

//2

const DisplayTextComponent = () =>{
  const [display, changeDisplay] = useState(true);

  const setDisplay = () =>{
    changeDisplay(!display);
  }

  return (
    <div>
      {display && <p>Текст отобразился</p>}
      <button onClick={setDisplay}>Скрыть/Отобразить</button>
    </div>
  )
}

//3

const InputComponent = () =>{
  const [value, changeValue] = useState();

  const setValue = (item) =>{
    changeValue(item.target.value);
  }

  return (
    <div>
      <input value={value} onChange={setValue}></input>
      <p>Введено: {value}</p>
    </div>
  )
}

//4

const ColorComponent = () =>{
  const [color, changeColor] = useState();

  const setColor = () => {
    changeColor(color === "blue" ? "pink": "blue")
  }

  const styleCss = {
    color: color,
  }

  return (
    <div>
      <p style={styleCss}>Меняем цвет</p>
      <button onClick={setColor}>Изменить цвет</button>
    </div>
  )
}

function App() {
  return (
    <div>
    <ButtonComponent/>
    <hr></hr>
    <DisplayTextComponent/>
    <hr></hr>
    <InputComponent/>
    <hr></hr>
    <ColorComponent/>
    </div>
  );
}

export default App;
