import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/Navbar'
import Footer from './NavBar/Footer';
import { MenuListMap } from './NavBar/MenuListMap';
import NavService from '../Service/NavService';
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';



class App extends Component {
  state = {
    data: []
  }

  menuList = () => {
    return (
      this.state.data.map(({ page }) => {
        return (
          <Route path={`${page}`} element={MenuListMap().get(page)} key={page} />
        )
      }))
  }

  componentDidMount() {
    NavService().then((data) => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Navbar data={this.state.data} />
            <div>
              <Routes>
                <Route path={"/"} element={<Home />} />
                {this.menuList()}
                <Route path='*' element={<NotFoundPage />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );

  }
}

export default App;
