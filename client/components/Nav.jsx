import React , { Fragment } from "react";

class Nav extends React.Component{
    render(){
        return(
            <Fragment> 
                
                <div class="navbar">

                    <ul>

                        <li><a href="blog.html">Blogs</a></li>
                        <li><a href="index.html">About Me</a></li>
                        <li><a href="contact.html">contact Me</a></li>

                    </ul>

                </div>

            </Fragment>
            
        )
    }
}

export default Nav