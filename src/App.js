import './App.css';
import Index from "./pages/index" 
import Details from "./pages/details"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path ='/' exact component={Index}/>
        <Route path = '/details/:id' component={Details} render={(props) => <Index {...props} pp={'Shamim Bin Nur'} />} >
          
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
