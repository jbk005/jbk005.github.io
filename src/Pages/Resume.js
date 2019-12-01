import { Component } from "react";
import ResumePDF from "../Assets/MarekGrzyb_CV.pdf";

class Resume extends Component {
    render() {
        window.location.href = ResumePDF;
        return "Please wait... Redirecting you to Marek Grzyb's Resume PDF...";
    }
}

export default Resume;