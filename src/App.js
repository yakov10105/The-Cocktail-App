import './App.css';
import Header from './Layout/Header/Header';
import {Redirect, Route, Switch} from 'react-router-dom'

import Random from './components/Random/Random';
import Search from './components/Search/Search';
import Home from './components/Home/Home'
import Cocktail from './components/Cocktail/Cocktail';

function App() {
  return (
    <>
      <div className="App">
          <Header/>
      </div>
      <div>
        <Switch>
          <Route path='/random' component={Random}></Route>
          <Route path='/search' component={Search}></Route>
          {/* <Route exact path='/cocktail/:id' component={Cocktail}></Route> */}
          <Route path="/cocktail/:id" render={(props) => <Cocktail {...props}/>}/>
          <Route path='/' component={Home}></Route>
          <Redirect to='/'/>
        </Switch>
      </div>
    </>
  );
}

export default App;
