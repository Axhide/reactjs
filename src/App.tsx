import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating value ={3}/>
            <Accordion/>
            <Rating value ={4}/>
            <Rating value ={1}/>
            <Rating value ={2}/>
            <Rating value ={5}/>
        </div>
    );
}

function AppTitle () {
    console.log("AppTitle rendering")
    return <div>This is APP component</div>
}

export default App;
