import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
    return (
        <>
            <Header text={"Header"}/>
            <Main text={"Main"}/>
            <Sidebar text={"Sidebar"}/>
            <Footer text={"Footer"}/>
        </>
    );
}

export default App;
