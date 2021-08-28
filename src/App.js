import './App.css';
import Products from './Components/Products';
import Banner from './Components/Banner';
import Nav_bar from './Components/Nav_bar';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <div>
            <Nav_bar />
            <Banner />
            <Products />
            <Profile />
            </div>

  );
}

export default App;
