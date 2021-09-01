import './App.css';
import Main from './screens/Main/Main.screen.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
