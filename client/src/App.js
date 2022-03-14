import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Formulario from './Components/Formulario';
import Favorite from './Components/Favorite';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/:id" component={Detail}/>
        <Route exact path="/dog" component={Formulario}/>
        <Route exact path="/favorites" component={Favorite}/>
      </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
