// 	AUTHOR:		SHAMIM BIN NUR
// 	GITHUB:		https://github.com/shamimbinnur
// 	LINKEDIN:	https://www.linkedin.com/in/shamimbinnur
// 	MAIL:		iamshamimbn@gmail.com
// 	SITE:		www.shamimbinnur.me

import './App.css';
import Home from "./pages/Home" 
import Details from "./pages/Details"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path ='/' exact component={Home}/>
        <Route path = '/details/:id' component={Details} render={(props) => <Home {...props} />} >
          
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
