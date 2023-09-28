import logo from './static/logo.png';
import './App.css';

const Navbar = () => {
  return (
  <nav id="nav" class="navbar">
    <div class="container">
      <img src={logo} class="img-fluid" alt=""></img>

    </div>
  </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;