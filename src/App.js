import logo from './logo.svg';
import './App.css';
import Myroute from './learn-route/Myroute';
import Mynavigation from './learn-route/Mynavigation';
import {BrowserRouter as Router} from 'react-router-dom';
// import Demo from './hooks/Demo';
import Son from './compTree/Son';
import { DadaProvider } from './compTree/MyContext';
import Demo from './fragments/Demo';

function App() {
  return (
    <div className="App1">
      {/* <Router>
        <Mynavigation/>
        <Myroute/>
      </Router> */}
      {/* <Son name="Puti name is Salam"/>
      <DadaProvider value="Dada send message to puti">
        <Son/>
      </DadaProvider> */}
      <Demo/>
    </div>
  );
}

export default App;
