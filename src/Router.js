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
const socialMediaLinks = {

    github: "https://github.com/jbk005/",
    linkedin: "https://www.linkedin.com/in/jbk005/",
    gmail: "jbharathkumar770@gmail.com",
    instagram: "https://www.instagram.com/stranger_is_not_an_evil/",
    facebook: "https://www.facebook.com/jbharath.kumar.005",
    medium: "https://medium.com/@jbk005",
    stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    youtube: "https://www.youtube.com/c/JBK005"
    // Instagram and Twitter are also supported in the links!
  };  

export default Router;
export {greeting, socialMediaLinks}