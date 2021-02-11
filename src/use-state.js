import React, { useState } from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
  }

const App = () => {
    return <HookSwitcher />;
};

const HookSwitcher = () => {
    const [color, setColor] = useState('tomato');
    const [fontSize, setFontSize]  = useState(14);

    return (
        <div style={{padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`}}>
            Hello world!
            <button onClick={() => {setColor('black')}}>Dark</button>
            <button onClick={() => {setColor('white')}}>Light</button>
            <button onClick={() => {setFontSize((s) => s + 2)}}>Font size +2</button>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));