import { Component } from "react";
import ResumePDF from "../Assets/jbk.txt";

class Resume extends Component {
    render() {
        window.location.href = ResumePDF;
        return "Please wait... Redirecting you to Bharath Kumar's Resume PDF...";
    }
}

export default Resume;