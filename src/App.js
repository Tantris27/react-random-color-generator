import { useState } from 'react';

const randomColor = require('randomcolor');

export default function App() {
  const randomcolor = randomColor({
    luminosity: 'random',
    hue: 'random',
  });
  const [color, setColor] = useState(randomColor());
  function onMouseClick() {
    setColor(randomcolor);
  }
  const [size, setSize] = useState('300');
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
        <h1 style={{ marginBottom: 30 }}>Color Generator</h1>
        <div style={styleblock} />
        <h2 style={{ marginBottom: 30 }}>{color}</h2>
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
      </div>
    </div>
  );
}
