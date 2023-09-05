import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <div className='border'></div>
      <Features/>
    </div>
  );
}

export default App;
