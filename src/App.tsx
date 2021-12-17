import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from 'react-router-dom'

function App() {

    return (
        <div>
            <div className='container'>
                <Routes>
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



