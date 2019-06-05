import React , { Fragment } from "react";

class Blog extends React.Component {
    render(){
        return(
            <Fragment>

                <div class="contentv2">

                    <h1>Welcome! this is where you can find all my projects during this course!</h1>

                    <div class="menu">

                        <ul>

                            <li><a href="blog/s1cultural.html">Sprint 1</a></li>
                            <li><a href="blog/sprint2tech.html">Sprint 2 <i>Technical</i></a></li>
                            <li><a href="blog/s2cultural.html">Sprint 2 <i>Cultural</i></a></li>
                            <li><a href="blog/s3tech.html">Sprint 3 <i>Technical</i></a></li>
                            <li><a href="blog/s3cultural.html">Sprint 3 <i>Cultural</i></a></li>
                            <li><a href="blog/s4cultural.html">Sprint 4 <i>Cultural</i></a></li>
                            <li><a href="blog/s4tech.html">Sprint 4 <i>Technical</i></a></li>
                            <li><a href="blog/s5cultural.html">Sprint 5 <i>Cultural</i></a></li>
                            <li><a href="blog/goals.html"><i>Goals</i></a></li>

                        </ul>

                    </div>

                    
                </div>

            </Fragment>

        )
    }
}

export default Blog