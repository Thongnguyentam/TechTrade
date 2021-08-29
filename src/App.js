import './App.css';
import Products from './Components/Products';
import Banner from './Components/Banner';
import Nav_bar from './Components/Nav_bar';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Upload from "./Components/Upload";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
      <Router>
        <Nav_bar />
        <Banner />
        <Switch>
          <Route path="/home" exact component={Products} />
          <Route path="/products" exact component={Products} />
          <Route path="/account" exact component={Profile} />
          <Route path="/" exact component={Login}/>
          <Route path="/sell" exact component={Upload}/>
        </Switch>
      </Router>
    );
}

export default App;
