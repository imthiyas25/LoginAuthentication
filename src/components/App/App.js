import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import useToken from './useToken';

const { token, setToken } = useToken();
function App() {
  const token = getToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
      
      <div className='wrapper'>
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/preferences">
                <Preferences/>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
