import logo from './logo.svg';
import './App.css';

const Apps = () => {
  return (
    <div>
      <Header />
      <h1>hello</h1>
      <Tech />
    </div>    
  )
}

const Tech = () => {
  return (
    <ul>
      <li>js</li>
      <li>react</li>
      <li>brain</li>
    </ul>
  )
}

const Header = () => {
  return (
    <div className="container">
        <a>Home</a>
        <a>Messg</a>
        <a>Exit</a>
    </div>
  );
}

export default Apps;