import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/Header'
import Menu from './layout/Menu'
import Slider from './layout/Slider'
import Sidebar from './layout/Sidebar'
import Footer from './layout/Footer'
import Product from './screens/Product'
import Cart from './screens/Cart'
import ProductDetail from './screens/ProductDetail'
import Success from './screens/Success'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <div id="body">
          <div class="container">
            <Menu />
            <div class="row">
              <div id="main" class="col-lg-8 col-md-12 col-sm-12">
                <Slider />
                <Switch>
                  <Route exact path="/" component={Product} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/detail/:id" component={ProductDetail} />
                  <Route path="/success" component={Success} />
                </Switch>
              </div>
              <Sidebar />

            </div>
          </div>
        </div>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
