import './App.css';
import NavBar from './components/navBar';
import Page from './components/page';

function App() {
  return (
    <div className="App">
      <div className="home">
          <NavBar />
          <Page />
      </div>
    </div>
  );
}

export default App;
