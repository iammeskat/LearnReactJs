import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Porftfolio';
// import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';
import reportWebVitals from './reportWebVitals';
import SortingTable from './react-table/SortingTable';


// const myrouter=(
//   <Router>
//     <div>
//       <url>
//         <Link to="/">Home </Link>
//         <Link to="/about">About </Link>
//         <Link to="/contact">Contact </Link>
//         <Link to="/portfolio">Portfolio </Link>
//         <Link to="/react-table">ReactTable </Link>
//       </url>

//       <Route exact path="/" component={App} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/portfolio" component={Portfolio} />
      
//       <Route path="/react-table" component={SortingTable} />
//     </div>
//   </Router>
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
