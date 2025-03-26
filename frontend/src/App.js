import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './static/Nav'
import Login from './user/Login';
import Logins from './user/Logins';
import Signup from './user/Signup';
import Dashboard from './dynamic/Dashboard';
import NewCustomers from './customers/NewCustomers';
import ModifyCustomers from './customers/ModifyCustomers';
import ListCustomers from './customers/ListCustomers';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route index element={<Logins />}/>
          <Route path='/register' element={<Signup />}/>
        </Route>
        <Route path='/user' element={<Nav />} >
          <Route index element={<Dashboard />} />
          <Route path='/user/customers'>
            <Route index element={<NewCustomers />} />
            <Route path='/user/customers/modify' element={<ModifyCustomers />} />
            <Route path='/user/customers/list' element={<ListCustomers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;