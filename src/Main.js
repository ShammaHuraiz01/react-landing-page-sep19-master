import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';


const AboutScreen = () => {
    
}
const Main = () => {

   return (
       <BrowserRouter>
       <Switch>
        <Route path="/" component={App} />
        <Route path="/about" component={
         <div>
         
         <h1>Welcome to About Page</h1>

         </div>

        } />

       </Switch>
      
       </BrowserRouter>
   )

}

export default Main;


