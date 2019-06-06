import React , { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";



import Home from "./Home";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Blog from "./Blog";
import Contact from "./Contact"
import S1cultural from "./S1cultural";
import S2tech from "./S2tech";
import S2cultural from "./S2cultural";
import S3tech from "./S3tech";
import S3cultural from "./S3cultural";
import S4tech from "./S4tech";
import S4cultural from "./S4cultural";
import S5cultural from "./S5cultural";
import Goals from "./Goals";


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
                <Route path="/s2tech" component={S2tech} />
                <Route path="/s2cultural" component={S2cultural} />
                <Route path="/s3tech" component={S3tech} />
                <Route path="/s3cultural" component={S3cultural} />
                <Route path="/s4tech" component={S4tech} />
                <Route path="/s4cultural" component={S4cultural} />
                <Route path="/s5cultural" component={S5cultural} />
                <Route path="/goals" component={Goals} />

                <Footer />
            </Router>

        </Fragment>
       
    )
}

export default App;