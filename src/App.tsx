import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Setting/Setting';
import {Friends} from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

const App = () => {
    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/messages' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    </BrowserRouter>
};

export default App;
