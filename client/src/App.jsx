import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Auth from './pages/Auth';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import News from './pages/News';

import IntellectualPropertyRights from './docs/IntellectualPropertyRights/IntellectualPropertyRights';
import PrivacyPolicy from './docs/Privacy_policy/PrivacyPolicy';
import TermsAndConditions from './docs/Terms_and_Conditions/TermsAndConditions';
import FQA from './docs/FAQ/FAQ';
import HelpCenter from './docs/HelpCenter/HelpCenter';
import Parteners from './pages/Parteners';
import Careers from './pages/Careers';

import Dashboard from './dashboard/Admin/components/Dashboard';
import UsersPage from './dashboard/Admin/Pages/Users';
import MallsPage from './dashboard/Admin/Pages/Malls';
import StoresPage from './dashboard/Admin/Pages/Stores';
import ProductsPage from './dashboard/Admin/Pages/Products';

import { Provider } from 'react-redux';
import store from './redux/store';

import MallProfile from './pages/MallProfilePage';
import StoreProfile from './pages/StoreProfilePage';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<><HomePage /></>}/>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<UsersPage />} />
            <Route path="/dashboard/malls" element={<MallsPage />} />
            <Route path="/dashboard/stores" element={<StoresPage />} />
            <Route path="/dashboard/products" element={<ProductsPage />} />

            <Route path='/auth' element = {<><Auth /></>}/>

            <Route path='/mall-info' element = {<><MallProfile /></>}/>
            <Route path='/store-info/:id' element = {<><StoreProfile /></>}/>

            <Route
              path='/news'
              element = {
                <>
                  <News />
                </>
              }
            />
            <Route
              path='/about-us'
              element = {
                <>
                  <AboutUs />
                </>
              }
            />
            <Route
              path='/contact-us'
              element = {
                <>
                  <Contact />
                </>
              }
            />
            <Route
              path='/intellectual-property-rights'
              element = {
                <>
                  <IntellectualPropertyRights />
                </>
              }
            />
            <Route
              path='/privacy-policy'
              element = {
                <>
                  <PrivacyPolicy />
                </>
              }
            />
            <Route
              path='/terms-and-conditions'
              element = {
                <>
                  <TermsAndConditions />
                </>
              }
            />
            <Route
              path='/fqa'
              element = {
                <>
                  <FQA />
                </>
              }
            />
            <Route
              path='/help-center'
              element = {
                <>
                  <HelpCenter />
                </>
              }
            />
            <Route
              path='/parteners'
              element = {
                <>
                  <Parteners />
                </>
              }
            />
            <Route
              path='/careers'
              element = {
                <>
                  <Careers />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App