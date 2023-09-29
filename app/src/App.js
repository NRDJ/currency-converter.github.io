import logo from './static/logo.png';
import './App.css';

const Navbar = () => {
  return (
  <nav id="nav" class="navbar">
    <div class="container">
      <img src={logo} class="img-fluid" alt=""></img>
      <p>Currency Exchange Converter</p>
      <a href=""><p>About</p></a>
    </div>
  </nav>
  );
}

const Main = () => {
  return (
    <div class="container mt-5 mb-5 pb-3 pt-5" id="main-converter">
      <div class="row justify-content-center align-items-center text-center g-2">
        <div class="col-3">AMOUNT</div>
        <div class="col-4">FROM</div>
        <div class="col-1"></div>
        <div class="col-4">TO</div>
      </div>
      <div class="row justify-content-center align-items-center text-center g-2">
        <div class="col-3"><input class="w-75" placeholder="$1.00" type="text" id="fname" name="fname"></input></div>
        <div class="col-4"><input class="w-75" placeholder="$USD" type="text" id="fname" name="fname"></input></div>
        <div class="col-1"><a name="" id="" class="btn btn-light w-75" href="#" role="button"><span>&#8644;</span></a></div>
        <div class="col-4"><input class="w-75" placeholder="EUR" type="text" id="fname" name="fname"></input></div>
      </div>
      <div class="row justify-content-center align-items-center text-center g-2">
        <div class="col mt-3"><h2>1 USD = X EUR</h2></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;