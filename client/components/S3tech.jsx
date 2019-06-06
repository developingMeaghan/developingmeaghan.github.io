import React , { Fragment } from "react";

class S2tech extends React.Component {
    render(){
        return(
            <Fragment>

                <div className="contentv2">

                    <h1>What The Heck is JavaScript and Who is DOM?</h1>

                        <div className ="paragraph">

                            <h2>Shall I Compare Thee to a Tasty Cake?</h2>
                            
                            <p>
                                HTML without CSS is like a cake with no icing.  It's pretty tasty 
                                and has good contents but isn't pretty to look at. HTML is the 
                                contents/structure of a website and by adding CSS we can make it 
                                look more appealing. CSS allows us to format the document as we'd like 
                                and add all the visual detail and decoration that our heart desires.
                            </p>

                        </div>

                        <div className="paragraph">

                            <h2>Just Go with The Flow Man Y'know, Just Loop-de-loop... </h2>
                            
                            <p>
                                Control flow and loops aren't hints on how to approach life, but to better 
                                understand them we can apply them to aspects of day to day activities. For 
                                example <strong>control</strong> flow is the order that programs read and execute things 
                                like instructions, statements and functions. We could compare this to baking 
                                a cake or baking in general. When backing we usually follow a set of instructions 
                                and the order of which we need to put the ingredients in for it to come out how it should.
                            </p>

                            <br />

                            <p>
                                Where as <strong>loops</strong> are a set of instructions that continue to repeat for either a set number, when 
                                it reaches a certain condition, or infinitely. So think of it like following a recipe it might 
                                tell you that you need 2 cups of flour. So you put in 1 scoop and then another until you have 
                                met the necessary requirement.
                            </p>

                        </div>

                        <div className="paragraph">

                            <h2>"You Come Into My House..."</h2>

                            <p>
                                The <strong>document object model</strong>, or the <strong>DOM</strong> , is a programming interface for HTML and XML documents. HTML is a huge 
                                part of what makes a web page, it’s what holds all the content that we read when we go to any webpage. The DOM 
                                changes the document into nodes and objects in order for it to be connected to a webpage. It represents the 
                                document on the webpage and allows programmers to manipulate and change aspects as they please with code called 
                                Java. For example we could interact with it to change colors, add or remove aspects and just general changes just 
                                to see if they work together or not. 
                            </p>

                        </div>

                        <div className="paragraph">

                            <h2>Arrays vs. Objects</h2>

                            <p>
                                Arrays and objects are good easy examples of what Java is. An <strong>array</strong> stores many values within itself. Often we might want 
                                to call information from it for whatever reason. To do this we would have to use something known as an index number. An 
                                array would like something like this:
                            </p>

                                <ul>

                                    <li>Cake [ eggs, milk, butter, sugar, vanilla, flour];</li>

                                </ul>

                            <p>
                                If we wanted to select a specific item in this array we would call on the array and then specify which value I wanted with the 
                                corresponding index number. For example if we wanted to select sugar this is how we'd do it:
                            </p>

                                <ul>

                                    <li>Cake [3]</li>

                                </ul>

                            <p>
                                The reason why the number is a 3 and not 4 is because unlike us humans computers start counting from the number 0 instead of the number 1. 
                            </p>

                            <br />
                            
                            <p>
                                The difference with <strong>objects </strong>is that they have multiple properties stored in them defining their state.  This would look something like this:
                            </p>

                            <ul >

                                <li>Var cake ( eggs: 2, flour; "2cups", sugar: "1 and half cups", salt:"1 teaspoon");</li>

                            </ul>

                            <p>
                                When we got to access data from our object we would again call on it and then state the property which held the data we were after. This is what this would look like:
                            </p>

                            <ul   >

                                <li>Cake.eggs;</li>

                            </ul>

                        </div>

                        <div className="paragraph">

                            <h2>Function is, as Function Does...</h2>

                            <p>
                                A <strong>function</strong> is a bit of code that has been given a name for us to call at a later time, they are very essential part to a programmers life when it comes to Java. 
                                The bit of code is more often than not either an action or behavior. By giving the bit of code a name it saves it for us to use at a later time. 
                                This is useful as it saves us from having to type it out over and over again, especially if it's something we would 
                                want or expect to use often. 
                            </p>

                        </div>

                </div>
                
            </Fragment>
        )
    };

};

export default S2tech;