import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import './App.scss';

import Homepage from "./components/Content/Homepage/Homepage";
import Blog from "./components/Content/Blog/Blog";
import Hobbies from "./components/Content/Hobbies/Hobbies";
import Kitchen from "./components/Content/Kitchen/Kitchen";
import Layout from "./components/UI/Layout/Layout";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = useState('')
    const [isTop, setIsTop] = useState({
        top: true,
        ref: null,
        intro: null
    })

    return (
        <div className="app">
            <Router>
                <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} menu={menu} setMenu={setMenu} isTop={isTop} setIsTop={setIsTop}>
                    <Switch>
                        <Route path={'/'} exact>
                            <Homepage menu={menu} setMenu={setMenu} isTop={isTop} setIsTop={setIsTop}/>
                        </Route>
                        <Route path={'/blog'} exact>
                            <Blog menu={menu} setMenu={setMenu}/>
                        </Route>
                        <Route path={'/hobbies'} exact >
                            <Hobbies menu={menu} setMenu={setMenu}/>
                        </Route>
                        <Route path={'/kitchen'} exact>
                            <Kitchen menu={menu} setMenu={setMenu}/>
                        </Route>
                        <Route path={'*'}>
                            <Redirect to={"/"}/>
                        </Route>
                        {/*<Route path={'*'} render={() => <Redirect to={"/"}/>}/>*/}
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
