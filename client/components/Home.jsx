import React , { Fragment } from "react";

class Home extends React.Component {
    render(){
        return(
            <Fragment>

                <div className="main_content">

                    <h1>But Who Are You Really Though?</h1>

                    <div className ="info box">

                        <p>
                            My name is Meaghan De Klerk, and I have no idea what I am doing with my life, but what I do know is that I have passion
                            for coding and that I would love to do something with it as a career. I am originally from South Africa but now 
                            call Wellington, New Zealand home. I have many loves one of them being music and collecting vinyls. Another for gaming
                            and creating art. 
                            <br/>
                            Travelling is also something I'm interested in but it is also the reason why I decided to pursue web development, 
                            as there are many places around the world looking for developers and therefore a tool in getting to see the world.
                            I want to experience everything the world has to offer or as much as I can during my time on this big rock hurling through space.
                        </p>

                    </div>  


                </div>

                <div className="selfie">

                    <img src="images/selfie.jpg" alt="Picture of Meaghan De Klerk" id="meimg" />

                </div>
                
            </Fragment>

        )
    }
}

export default Home