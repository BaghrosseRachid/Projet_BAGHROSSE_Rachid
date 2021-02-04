import React, { Component } from 'react';
import './App.css';
import Fonction from './Components/fonction/Fonction';
import Contact from './Components/contacts/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacs from  './Components/contacts/Contacs'
import {Provider} from './Components/Context'
import 'font-awesome/css/font-awesome.min.css'
import AddContact from './Components/AddContact'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './Components/pages/About';
import PageNotFound from './Components/pages/PageNotFound';
import EditContact from  './Components/EditContact'

class App extends Component {


  render (){
    return (
      
    <Provider>
      <Router>
            <div className="App">
               <Fonction title=" baghrosse contacts"  />
               <Switch>
                <Route exact  path="/" component={Contacs}/>  
                <Route exact path="/contact/add" component={AddContact}/>  
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact/edit/:id" component={EditContact}/>  
     
                <Route component={PageNotFound}/>     

               </Switch>
            </div>
    </Router>
    </Provider>
  );
    }
}

export default App;
