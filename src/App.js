import React, { Component, lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import { suspenseFallbackLoader } from './components/Loader'
import Header from './components/Header';
// import Main from './components/Main';

const Login = lazy(() => import("./components/Login"));
const Main = lazy(() => import("./components/Main"));

export class App extends Component {
  render() {
    let load = suspenseFallbackLoader()
    console.log("asd")
    console.log("asd")
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="my-4 py-4">
            <Suspense fallback={load}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </div>
    );
  }
}
export default App
