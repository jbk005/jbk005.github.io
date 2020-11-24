import { Component } from "react";
import ResumePDF from "../Assets/logos/jbk_CV.pdf";

class Resume extends Component {
    render() {
        window.location.href = ResumePDF;
        return "Please wait... Redirecting you to Bharath Kumar's Resume PDF...";
    }
}

export default Resume;