import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'

import NewBook from './Components/NewBook'

import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Update from './Components/Update'


export default ()=>{

  return(
       <Router>
              <Switch>
                    <Route exact path="/"><Home/></Route>

                    <Route exact path="/add-book"><NewBook/></Route>

                    <Route exact path="/update/:bookId"><Update/></Route>
              </Switch>
       </Router>
  )


}