import { useState } from 'react';

const randomColor = require('randomcolor');

export default function App() {
  const [hue, setHue] = useState('random');
  function onChange(event) {
    setHue(event.target.value);
  }
  const [light, setLight] = useState('random');
  function onChange2(event) {
    setLight(event.target.value);
  }
  const randomcolor = randomColor({
    luminosity: light,
    hue: hue,
  });
  const [color, setColor] = useState(randomColor());
  function onMouseClick() {
    setColor(randomcolor);
  }
  const [size, setSize] = useState('150');
  function handleChange(event) {
    setSize(event.target.value);
  }
  const styleblock = {
    display: 'block',
    width: size + 'px',
    height: size + 'px',
    background: color,
    marginBottom: 30,
  };
  const stylediv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <div className="App" style={stylediv}>
        <h1 style={{ marginBottom: 30, color: color }}>
          Random Color Generator
        </h1>
        <div style={styleblock} />
        <h2 style={{ marginBottom: 30, color: color }}>{color}</h2>
        <button onClick={onMouseClick} style={{ marginBottom: 30 }}>
          Change Color
        </button>
        <label
          style={{
            display: 'block',
          }}
        >
          Size in px:
          <input
            type="text"
            value={size}
            onChange={handleChange}
            style={{ display: 'block' }}
          />
        </label>
        <label
          style={{
            display: 'block',
          }}
        >
          Color
          <input
            type="text"
            value={hue}
            onChange={onChange}
            style={{ display: 'block' }}
          />
        </label>
        <label
          style={{
            display: 'block',
          }}
        >
          Light
          <input
            type="text"
            value={light}
            onChange={onChange2}
            style={{ display: 'block' }}
          />
        </label>
      </div>
    </div>
  );
}
