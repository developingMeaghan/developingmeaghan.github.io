import React , { Fragment } from "react";

class Nav extends React.Component{
    render(){
        return(
            <Fragment> 

                <div className="navbar">

                    <ul>

                        <li><a href="#/blog">Blogs</a></li>
                        <li><a href="#/">About Me</a></li>
                        <li><a href="#/contact">contact Me</a></li>

                    </ul>

                </div>

            </Fragment>
            
        )
    }
}

export default Nav