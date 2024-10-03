// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import TextInputForm from './textInputForm';
import gifImage from './signfy.gif';
import gifImage1 from './star1.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {gifImage} width="300" height="200"></img>
        <TextInputForm />
      </header>
    </div>
  );
}

export default App;