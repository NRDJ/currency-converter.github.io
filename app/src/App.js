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

const Converter = () => {
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

const Table = () => {
  return (
    // <div class="container mt-5 mb-5 pb-3 pt-5" id="main-table">
    //   <div class="row justify-content-center align-items-center g-2">
    //     <div class="col text-center">
    //       <h2>Base Currency:</h2>
    //     </div>
    //     <div class="col text-center">
    //       <input class="" placeholder="$USD" type="text" id="fname" name="fname"></input>
    //     </div>
    //     <div class="col text-center">
    //       <h2>Amount:</h2>
    //     </div>
    //     <div class="col text-center">
    //       <input class="" placeholder="$1.00" type="text" id="fname" name="fname"></input>
    //     </div>
    //   </div>
    // </div>
    // <div class="container mt-5 mb-5 pb-3 pt-5" id="main-table" style="display: flex; flex-direction: row; align-items: center;">
    //   <h2 style="margin-right: 10px;">Base Currency:</h2>
    //   <input class="" placeholder="$USD" type="text" id="base-currency" name="base-currency"></input>
    //   <h2 style="margin-left: 20px; margin-right: 10px;">Amount:</h2>
    //   <input class="" placeholder="$1.00" type="text" id="amount" name="amount"></input>
    // </div>
    <div class="container align-items-center mt-5 mb-5 pb-3 pt-5" id="main-table">
      <div class="row align-items-center text-center">
        <div class="col-1">
        </div>
        <div class="col-3">
          <h2 class="mr-2">Base Currency:</h2>
        </div>
        <div class="col-2">
          <input class="form-control" placeholder="$USD" type="text" id="base-currency" name="base-currency"></input>
        </div>
        <div class="col-3">
          <h2 class="ml-4 mr-2">Amount:</h2>
        </div>
        <div class="col-2">
          <input class="form-control" placeholder="$1.00" type="text" id="amount" name="amount"></input>
        </div>
        <div class="col-1">
        </div>
      </div>
      <div class="row align-items-center text-center mt-4">
        <div class="col-1">
        </div>
        <div class="col-5">
          <table class="table table-light">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">1 USD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-5">
          <table class="table table-light">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-1">
        </div>
      </div>
    </div>
  );
}

const Main = () => {
  return (
    <div>
      <Converter />
      <Table />
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