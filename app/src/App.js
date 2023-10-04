import logo from './static/logo.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';

const linkedin =<FontAwesomeIcon icon={faLinkedinIn} />
const github =<FontAwesomeIcon icon={faGithub} />
const arrows = <FontAwesomeIcon icon={faRightLeft} />

const Navbar = () => {
  return (
  <nav id="nav" class="pb-2 pt-2">
    <div class="container">
      <div class="row align-items-center text-center">
        <div class="col-4 text-start">      
          <img src={logo} class="" alt=""></img>
        </div>
        <div class="col-4">      
          <p>Currency Converter</p>
        </div>
        <div class="col-4 text-end">      
          <a href=""><p>About</p></a>
        </div>
      </div>
    </div>
  </nav>
  );
}

const Converter = () => {
  return (
    <div>
      <div class="container mt-5 mb-5 pb-3 pt-5 d-sm-none" id="main-converter">
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col-12">AMOUNT</div>
        </div>
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col-12"><input class="w-75" placeholder="$1.00" type="text" id="fname" name="fname"></input></div>
        </div>
        <div class="row justify-content-center align-items-center text-center g-2 mt-3">
          <div class="col-5">FROM</div>
          <div class="col-2"></div>
          <div class="col-5">TO</div>
        </div>
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col-5"><input class="w-75" placeholder="$USD" type="text" id="fname" name="fname"></input></div>
          <div class="col-2"><a name="" id="btn-arrows" class="btn btn-light" href="#" role="button">{arrows}</a></div>
          <div class="col-5"><input class="w-75" placeholder="EUR" type="text" id="fname" name="fname"></input></div>
        </div>
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col mt-3"><p>1 USD = X EUR</p></div>
        </div>
      </div>
      {/* Small size + */}
      <div class="container mt-5 mb-5 pb-3 pt-5 d-none d-sm-block" id="main-converter">
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col-3">AMOUNT</div>
          <div class="col-4">FROM</div>
          <div class="col-1"></div>
          <div class="col-4">TO</div>
        </div>
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col-3"><input class="w-75" placeholder="$1.00" type="text" id="fname" name="fname"></input></div>
          <div class="col-4"><input class="w-75" placeholder="$USD" type="text" id="fname" name="fname"></input></div>
          <div class="col-1"><a name="" id="btn-arrows" class="btn btn-light" href="#" role="button">{arrows}</a></div>
          <div class="col-4"><input class="w-75" placeholder="EUR" type="text" id="fname" name="fname"></input></div>
        </div>
        <div class="row justify-content-center align-items-center text-center g-2">
          <div class="col mt-3"><p>1 USD = X EUR</p></div>
        </div>
      </div>
    </div>
  );
}

const Table = () => {
  return (
    <div>
      <div class="container align-items-center mt-5 mb-5 pb-3 pt-5 d-md-none" id="main-table">
        <div class="row align-items-center text-center">
          <div class="col-6">
            <p class="mr-2">Currency:</p>
          </div>
          <div class="col-6">
            <input class="form-control" placeholder="$USD" type="text" id="base-currency" name="base-currency"></input>
          </div>
        </div>
        <div class="row align-items-center text-center mt-2">
          <div class="col-6">
            <p class="ml-4 mr-2">Amount:</p>
          </div>
          <div class="col-6">
            <input class="form-control" placeholder="$1.00" type="text" id="amount" name="amount"></input>
          </div>
        </div>
        <div class="row align-items-center text-center mt-4">
          <div class="col-12">
            <table class="table rounded-corners table-light">
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
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Medium size + */}
      <div class="container align-items-center mt-5 mb-5 pb-3 pt-5 d-none d-md-block" id="main-table">
        <div class="row align-items-center text-center">
          <div class="col-1">
          </div>
          <div class="col-3">
            <p class="mr-2">Currency:</p>
          </div>
          <div class="col-2">
            <input class="form-control" placeholder="$USD" type="text" id="base-currency" name="base-currency"></input>
          </div>
          <div class="col-3">
            <p class="ml-4 mr-2">Amount:</p>
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
            <table class="table rounded-corners table-light">
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
            <table class="table rounded-corners table-light">
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
    </div>
  );
}

const Footer = () => {
  return (
      <footer class="text-white py-4">
        <div class="container">
            <div class="text-center">
              <h4>Contact and Links</h4>
              <p>Email: nriedeldj@gmail.com</p>
              <p>Phone: +56 9 6296 4643</p>
              <a target="_blank" href="https://linkedin.com/in/nicolás-riedel-a13539156" class="text-white linkedin">{linkedin}</a>
              <a target="_blank" href="https://github.com/NRDJ" class="text-white">{github}</a>
            </div>
          </div>
      </footer>
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
      <Footer />
    </div>
  );
}

export default App;