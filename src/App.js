import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";


const App = () =>
    <div>
        <Route path="/" exact Component={HomePage} />
    </div>

export default App;
