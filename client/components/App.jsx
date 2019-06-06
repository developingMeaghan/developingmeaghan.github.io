import React , { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./Blog";
import Contact from "./Contact"
import S1cultural from "./S1cultural";

function App (props) {
    return(
        <Fragment>

            <Router>
                <Header />
                <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/s1cultural" component={S1cultural} />

                <Footer />
            </Router>

        </Fragment>
       
    )
}

export default App;