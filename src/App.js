import './App.css';
import { Provider } from 'react-redux';
import store from './Golf/Redux/store';
import Navigators from './Golf/componants/Navigators';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Golf/componants/Home';
import ShowDetailsInCart from './Golf/componants/Cart';
import ShowDetails from "./Golf/componants/shop";
import AboutUs from './Golf/componants/AboutUs';
import Payment from './Golf/componants/GoToPayment';
import Footer from './Golf/componants/Footer';


function App() {
  return (
    <>
      <Provider className="App" store={store}>
        <Router>
          <Navigators />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/Cart" Component={ShowDetailsInCart} />
            <Route path="/Products" Component={ShowDetails} />
            <Route path="/AboutUs" Component={AboutUs} />
            <Route path="/GoToPayment" Component={Payment} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>

  );
}

export default App;
