// import logo from './logo.svg';
import './App.css';
import './css_file/log_in.css';
import UserForm from './componets/log-in';
import ThePage from './componets/MainPage';
import Orders from './componets/Orders';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ThePage/>
        <Switch> 
          <Route path='/login'> <UserForm/> </Route> 
          <Route exact path='/orders'> <Orders/> </Route>
          <Route exact path='/Account'> <Orders/> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
