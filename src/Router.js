import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Resume from "./Pages/Resume";
import Main from "./Pages/Main";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="*" component={Main} />
            </BrowserRouter>
        );
    }
}

const greeting = {
    /* Your Summary And Greeting Section */
    /*username: "JBK005",*/
   /* title: "Hi all, I'm Bharath Kumar",*/
  /*  subTitle: emoji("I love finding out how things work and visualizing them in a creative way using computer technology🚀. I'm especially focused on python programming and also a mechanical product works."),*/
    resumeLink: "https://drive.google.com/file/d/1LUWb5ezb8xCgKDO5d2xG0K098EmR1z4j/view?usp=drivesdk"
  };
  

export default Router;
export {greeting}