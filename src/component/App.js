import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './footer/Footer';
import Header from './header/Header';
import Login from './auth/Login';

import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/login" exact={true} component={Login} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
