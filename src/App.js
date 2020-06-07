/*
 * @Author: chenying
 * @Date: 2020-06-06 22:19:46
 * @LastEditTime: 2020-06-06 22:44:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin-demo/src/App.js
 */ 
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './view/login/Login'
import Admin  from './view/admin/Admin'

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/" component={Admin}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
