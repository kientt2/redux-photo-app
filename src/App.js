import React, {Suspense} from "react";
import Header from './components/Header/Header';
import Footer from "./Footer";
import {BrowserRouter, Route, Switch as Routes, Link, Redirect        } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "components/NotFound";


const Photo = React.lazy(() => import('./components/Photo'))
function App() {
    
    return (
        <div>
            <Suspense fallback={<div>Loading ...</div>}>
                    <BrowserRouter>
                        <Header/>
                        <h1>App.js react-router</h1>
                        <ul>
                            <li><Link to="/photos">Go to photo page</Link></li>
                            <li><Link to="/photos/add">Go to Add new photo page</Link></li>
                            <li><Link to="/photos/123">Go to Edit photo page</Link></li>
                        </ul>
                        <Routes>
                            <Redirect exact from="/" to="/photos" />
                            <Route path="/photos" component={Photo} />
                            <Route component={NotFound} />
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
