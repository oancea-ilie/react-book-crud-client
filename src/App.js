import React from 'react'
import {Home} from './Components/Home'
import NewBook from './Components/NewBook'

import {BrowserRouter as Router,Switch,Route} from "react-router-dom" // pentru a seta paginatia site-ului.
import Update from './Components/Update'
import { Register } from './Components/Register'
import { Login } from './Components/Login'


const App=()=>{

  return(
       <Router>
              <Switch>
                    <Route exact path="/"><Home/></Route>

                    <Route exact path="/add-book"><NewBook/></Route>

                    <Route exact path="/update/:bookId"><Update/></Route>

                    <Route exact path="/login"><Login/></Route>

                    <Route exact path="/register"><Register/></Route>

              </Switch>
       </Router>
  )

}

export default App;