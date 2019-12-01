import React, { Component, Fragment } from "react";
import "./Experience.css";
import { Container, CardColumns, Card, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import ImgSuspense from "img-suspense";
import cppLogo from "../Assets/logos/cpp_logo.png";
import csharpLogo from "../Assets/logos/csharp_logo.png";
import pythonLogo from "../Assets/logos/python_logo.png";
import MDSpinner from "react-md-spinner";
import htmlLogo from "../Assets/logos/html_logo.png";
import cssLogo from "../Assets/logos/css_logo.png";
import jsLogo from "../Assets/logos/js_logo.png";
import tsLogo from "../Assets/logos/ts_logo.png";
import mysqlLogo from "../Assets/logos/mysql_logo.png";
import mongodbLogo from "../Assets/logos/mongodb_logo.png";
import config from "../Configs/config.json";
import unityLogo from "../Assets/logos/unity_logo.png";
import unrealLogo from "../Assets/logos/ue_logo.png";
import awsLogo from "../Assets/logos/aws_logo.png";
import azureLogo from "../Assets/logos/azure_logo.png";
import firebaseLogo from "../Assets/logos/firebase_logo.png";
import androidStudioLogo from "../Assets/logos/androidstudio_logo.png";
import blenderLogo from "../Assets/logos/blender_logo.png";
import gimpLogo from "../Assets/logos/gimp_logo.png";
import gitLogo from "../Assets/logos/git_logo.png";
import pycharmLogo from "../Assets/logos/pycharm_logo.png";
import qtLogo from "../Assets/logos/qt_logo.png";
import vsLogo from "../Assets/logos/vs_logo.png";
import Counters from "../Components/Counters/main";
import { withIsVisible } from "react-is-visible";

class Experience extends Component {

    languagesBinding = {
        general: [
            {
                logo: cppLogo,
                name: "C++",
                description: "Somewhat experienced"
            },
            {
                logo: csharpLogo,
                name: "C#",
                description: "Advanced"
            },
            {
                logo: pythonLogo,
                name: "Python",
                description: "Advanced"
            }
        ],
        web: [
            {
                logo: htmlLogo,
                name: "HTML",
                description: "Advanced"
            },
            {
                logo: cssLogo,
                name: "CSS",
                description: "Beginner"
            },
            {
                logo: jsLogo,
                name: "JS",
                description: "Somewhat experienced"
            },
            {
                logo: tsLogo,
                name: "TS",
                description: "Somewhat experienced"
            },
            {
                logo: mysqlLogo,
                name: "MySQL",
                description: "Advanced"
            },
            {
                logo: mongodbLogo,
                name: "MongoDB",
                description: "Somewhat experienced"
            },
        ]
    }

    enginesBinding = [
        {
            logo: unityLogo,
            name: "Unity",
            description: "Advanced"
        },
        {
            logo: unrealLogo,
            name: "Unreal Engine",
            description: "Beginner"
        }
    ]

    servicesBinding = [
        {
            logo: firebaseLogo,
            name: "Firebase",
            description: "Advanced"
        },
        {
            logo: azureLogo,
            name: "Azure",
            description: "Beginner"
        },
        {
            logo: awsLogo,
            name: "AWS",
            description: "Beginner"
        }
    ]

    softwareBinding = [
        {
            logo: vsLogo,
            name: "Visual Studio",
            description: "Somewhat experienced"
        },
        {
            logo: androidStudioLogo,
            name: "Android Studio",
            description: "Somewhat experienced"
        },
        {
            logo: pycharmLogo,
            name: "PyCharm",
            description: "Advanced"
        },
        {
            logo: qtLogo,
            name: "Qt",
            description: "Beginner"
        },
        {
            logo: gitLogo,
            name: "Git",
            description: "Advanced"
        },
        {
            logo: blenderLogo,
            name: "Blender",
            description: "Beginner"
        },
        {
            logo: gimpLogo,
            name: "Gimp",
            description: "Somewhat experienced"
        }
    ]

    getEntries(array) {
        return array.map(entry => {
            return entry.logo
                ? (
                    <OverlayTrigger
                        key={entry.name}
                        placement="top"
                        overlay={<Tooltip>{entry.description}</Tooltip>}>
                        <Col className="entryWithLogo">
                            <ImgSuspense
                                src={entry.logo}
                                fallback={<MDSpinner />} />
                            <h6>{entry.name}</h6>
                        </Col>
                    </OverlayTrigger>
                )
                : (
                    <OverlayTrigger
                        key={entry.name}
                        placement="top"
                        overlay={<Tooltip>{entry.description}</Tooltip>}>
                        <Col className="entry" key={entry.name}>
                            <h6>{entry.name}</h6>
                        </Col>
                    </OverlayTrigger>
                )
        })
    }

    getExperience(array, showHireMe = false) {
        if (array.length === 0) {
            return (
                <div className="Empty">
                    <p className="NoneText">None yet!</p>
                    {showHireMe ? <a href={`mailto:${config.email}`} className="HireText">Hire me!</a> : null}
                </div>
            )
        }

        return array.map(entry => (
            <Fragment key={entry.name}>
                <h6><a href={entry.url}>{entry.name}</a></h6>

                <ul>
                    {entry.notes.map(note => (
                        <li key={note}>{note}</li>
                    ))}
                </ul>
            </Fragment>
        ))
    }

    getCardLayout(title, type, data, isOneRow = false) {
        switch (type) {
            case "multiple":
                const content = data.map((entry, index) => entry.title
                    ? (
                        <React.Fragment key={entry.title}>
                            <h4 className="contentSection"><span>{entry.title}</span></h4>
                            <Row>{entry.data}</Row>
                        </React.Fragment>
                    )
                    : (<Col key={index}>{entry}</Col>))

                const CardLayout = isOneRow ? <Row>{content}</Row> : null;

                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <hr />
                            <div className="card-text">{CardLayout ? CardLayout : content}</div>
                        </Card.Body>
                    </Card>
                )
            case "list":
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <hr />
                            <div className="card-text listSection">{data}</div>
                        </Card.Body>
                    </Card>
                )
            case "text":
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text className="experienceDescription">{data}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            default:
                return <Card></Card>
        }
    }

    render() {
        const { isVisible } = this.props;

        return (
            <section id="Experience">
                <Container className={isVisible ? "Visible" : ""}>
                    <h1 className="sectionTitle">Experience</h1>
                    <p className="sectionDesc">You can also view my resume (in PDF) <a href="/resume">here</a></p>

                    <CardColumns>
                        {this.getCardLayout("Programming Languages", "multiple", [{ title: "General", data: this.getEntries(this.languagesBinding.general) }, { title: "Web", data: this.getEntries(this.languagesBinding.web) }])}
                        {this.getCardLayout("Human Languages", "multiple", this.getEntries(config.humanLanguages), true)}
                        {this.getCardLayout("Working Experience", "list", this.getExperience(config.workingExperience, true))}
                        {this.getCardLayout(config.experienceDescriptionCard1.name, "text", config.experienceDescriptionCard1.content)}
                        {this.getCardLayout(config.experienceDescriptionCard2.name, "text", config.experienceDescriptionCard2.content)}
                        {this.getCardLayout("Education", "list", this.getExperience(config.education))}
                        {this.getCardLayout("Engines", "multiple", this.getEntries(this.enginesBinding), true)}
                        {this.getCardLayout("Services", "multiple", this.getEntries(this.servicesBinding), true)}
                        {this.getCardLayout("Software", "multiple", this.getEntries(this.softwareBinding), true)}
                    </CardColumns>
                </Container>

                <Counters />
            </section>
        );
    }
}

export default withIsVisible(Experience);