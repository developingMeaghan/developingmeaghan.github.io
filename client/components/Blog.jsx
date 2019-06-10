import React , { Fragment } from "react";

class Blog extends React.Component {
    render(){
        return(
            <Fragment>

                <div className="contentv2">

                    <h1>Welcome! this is where you can find all my projects during this course!</h1>

                    <div className="menu">
                    <h3>Here you will find a collection of thoughts and expereinces during the foundation part of my journey with Enspiral Dev Academy </h3>

<ul>

                            <li><a href ="#/s1cultural">Sprint 1</a></li>
                            <li><a href="#/s2tech">Sprint 2 <i>Technical</i></a></li>
                            <li><a href="#/s2cultural">Sprint 2 <i>Cultural</i></a></li>
                            <li><a href="#/s3tech">Sprint 3 <i>Technical</i></a></li>
                            <li><a href="#/s3cultural">Sprint 3 <i>Cultural</i></a></li>
                            <li><a href="#/s4cultural">Sprint 4 <i>Cultural</i></a></li>
                            <li><a href="#/s4tech">Sprint 4 <i>Technical</i></a></li>
                            <li><a href="#/s5cultural">Sprint 5 <i>Cultural</i></a></li>
                            <li><a href="#/goals"><i>Goals</i></a></li>

                        </ul>

                        

                    </div>

                    
                </div>

            </Fragment>

        )
    }
}

export default Blog