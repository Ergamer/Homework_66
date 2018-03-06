import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import GetInformation from "./components/GetInformation/GetInformation";
import EditInformation from "./components/EditInformation/EditInformation";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/pages/admin" exact component={EditInformation}/>
                    <Route path="/pages/:id" exact component={GetInformation}/>
                </Switch>
            </div>
        );
    }
}

export default App;
