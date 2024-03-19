import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';

function App() {
  const [mode, changeMode] = useState('light');
  const [alertState, changeAlertstate] = useState(false);
  const [msg, changeMsg] = useState('this is an alert');

  const handleModeChange = () => {
    if (mode === 'light') {
      document.body.style.transition = 'background-color 0.3s ease'; // Add transition
      changeMode('dark');
      document.body.style.backgroundColor = '#090125';
    } else {
      document.body.style.transition = 'background-color 0.3s ease'; // Add transition
      changeMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  
  const triggerAlert = (msg) => {
    changeMsg(msg);
    changeAlertstate(true);
    setTimeout(() => changeAlertstate(false), 2000);
  };

  return (
    <div>
      <Navbar title="TextUtils" about="About" changeMode={handleModeChange} mode={mode} />
      {alertState && <Alert msg={msg} />}
      <div className="container">
        <Textform mode={mode} triggerAlert={triggerAlert} />
      </div>
      {/* <AboutUs mode={mode} /> */}
    </div>
  );
}

export default App;
