import logo from "./dict.png"
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="dictionary-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Jean Edem</footer>
      </div>
    </div>
  );
}


