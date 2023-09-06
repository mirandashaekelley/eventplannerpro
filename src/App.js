import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <div className='border'></div>
      <Features/>
      <NewsList/>
    </div>
  );
}

export default App;
